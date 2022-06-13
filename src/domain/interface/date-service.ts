export default interface IDateService {
  startDate: Date
  endDate: Date
  readonly YEAR_IN_MILISECONDS: number
  readonly MONTHS_IN_ONE_YEAR: number
  timeInYears(): number
  timeInMonths(): number
  isInvalidRangeOfDate(): boolean
}
