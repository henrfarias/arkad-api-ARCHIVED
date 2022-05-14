import { IInputInvestmentEntity } from '../interface/investment'
import precise from '../../shared/helpers/precise'
import IDateService from '../interface/date-service'

export default class Investment {
  readonly initialValue: number
  readonly annualInterest: number
  readonly applicationDate: Date
  readonly dueDate: Date

  constructor(
    input: IInputInvestmentEntity,
    private dateService: IDateService
  ) {
    this.dateService.init(input.applicationDate, input.dueDate)
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

  private calcFinalAmount(): number {
    return precise(
      this.initialValue *
        (1 + this.annualInterest) ** this.dateService.timeInYears()
    )
  }
}
