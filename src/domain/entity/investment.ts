import precise from '@shared/helpers/precise'
import { IInputInvestmentEntity } from '@domain/interface/investment'
import IDateService from '@domain/interface/date-service'

export default class Investment {
  readonly initialValue: number
  readonly annualInterest: number
  readonly applicationDate: Date
  readonly dueDate: Date

  constructor(
    input: IInputInvestmentEntity,
    private dateService: IDateService
  ) {
    if (this.dateService.isInvalidRangeOfDate())
      throw new Error('Invalid range of date')
    this.initialValue = input.initialValue
    this.annualInterest = input.annualInterest / 100
    this.applicationDate = input.applicationDate
    this.dueDate = input.dueDate
  }

  public simulate(): number {
    return this.calcFinalAmount()
  }

  public getGrossProfit(): number {
    return precise(this.calcFinalAmount() - this.initialValue)
  }

  private calcFinalAmount(): number {
    return precise(
      this.initialValue *
        (1 + this.annualInterest) ** this.dateService.timeInYears()
    )
  }
}
