import IDateService from '@domain/interface/date-service'

export default class IncomeTax {
  private higher: number
  private high: number
  private low: number
  private lower: number

  constructor(private dateService: IDateService) {
    this.higher = 0.225
    this.high = 0.2
    this.low = 0.175
    this.lower = 0.15
  }

  public deduct(amount: number): number {
    const aliquot = this.aliquot(this.dateService.timeInMonths())
    return amount * (1 - aliquot)
  }

  private aliquot(months: number) {
    if (months > 6 && months <= 12) return this.high
    if (months > 12 && months <= 24) return this.low
    if (months > 24) return this.lower
    return this.higher
  }
}
