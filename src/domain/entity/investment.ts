/* eslint-disable class-methods-use-this */
import { IInputInvestmentEntity } from '../interface/investment'
import precise from '../service/precise'

export default class Investment {
  readonly initialValue: number
  readonly annualInterest: number
  readonly applicationDate: Date
  readonly dueDate: Date
  private YEAR_IN_MILISECONDS: number
  private MONTHS_IN_ONE_YEAR: number

  constructor(investment: IInputInvestmentEntity) {
    this.applicationDate = investment.applicationDate
    this.dueDate = investment.dueDate
    if (this.isInvalidRangeOfDate()) throw new Error('Invalid range of date')
    this.initialValue = investment.initialValue
    this.annualInterest = investment.annualInterest / 100
    this.YEAR_IN_MILISECONDS = 3.17098 * 10 ** -11
    this.MONTHS_IN_ONE_YEAR = 12
  }

  public simulate(monthlyContribution?: number): number {
    let result = this.calcFinalAmount()
    if (monthlyContribution) {
      result += this.calcFutureValue(monthlyContribution)
    }
    return result
  }

  private calcFinalAmount(): number {
    return precise(
      this.initialValue * (1 + this.annualInterest) ** this.timeInYears()
    )
  }

  private calcFutureValue(monthlyContribution: number): number {
    return precise(
      (monthlyContribution *
        ((1 + this.monthlyInterest()) ** this.timeInMonths() - 1)) /
        this.monthlyInterest()
    )
  }

  private timeInYears(): number {
    const timeInMiliseconds =
      this.dueDate.getTime() - this.applicationDate.getTime()
    const timeInYears = precise(timeInMiliseconds * this.YEAR_IN_MILISECONDS)
    return timeInYears
  }

  private timeInMonths(): number {
    const timeInMonths = this.timeInYears() * this.MONTHS_IN_ONE_YEAR
    return timeInMonths
  }

  private monthlyInterest(): number {
    const monthlyInterest = this.annualInterest / this.MONTHS_IN_ONE_YEAR
    return monthlyInterest
  }

  private isInvalidRangeOfDate(): boolean {
    const dateDiff = this.dueDate.getTime() - this.applicationDate.getTime()
    return dateDiff < 0
  }
}
