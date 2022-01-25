import precise from '../service/precise'

export interface IInputInvestmentEntity {
  initialValue: number
  annualInterest: number
  applicationDate: Date
  dueDate: Date
}

export default class Investment {
  readonly initialValue: number
  readonly annualInterest: number
  readonly applicationDate: Date
  readonly dueDate: Date

  constructor(investment: IInputInvestmentEntity) {
    this.initialValue = investment.initialValue
    this.annualInterest = investment.annualInterest / 100
    this.applicationDate = investment.applicationDate
    this.dueDate = investment.dueDate
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
    const timeInYears = precise(timeInMiliseconds * (3.17098 * 10 ** -11))
    return timeInYears
  }

  private timeInMonths(): number {
    const timeInMonths = this.timeInYears() * 12
    return timeInMonths
  }

  private monthlyInterest(): number {
    const monthlyInterest = this.annualInterest / 12
    return monthlyInterest
  }
}
