import precise from '@shared/helpers/precise'
import { IInputInvestmentEntity } from '@domain/interface/investment'
import IDateService from '@domain/interface/date-service'

export default class Investment {
  readonly initialValue: number
  readonly annualInterest: number
  readonly applicationDate: Date
  readonly dueDate: Date
  readonly error: Error | null

  constructor(
    input: IInputInvestmentEntity,
    private dateService: IDateService
  ) {
    this.dateService.init(input.applicationDate, input.dueDate)
    this.error = null
    if (this.dateService.isInvalidRangeOfDate())
      this.error = new Error('Invalid range of date')
    this.initialValue = input.initialValue
    this.annualInterest = input.annualInterest / 100
    this.applicationDate = input.applicationDate
    this.dueDate = input.dueDate
  }

  public simulate(): number {
    return this.calcFinalAmount()
  }

  public isThereError(): boolean {
    return this.error !== null
  }

  private calcFinalAmount(): number {
    return precise(
      this.initialValue *
        (1 + this.annualInterest) ** this.dateService.timeInYears()
    )
  }
}
