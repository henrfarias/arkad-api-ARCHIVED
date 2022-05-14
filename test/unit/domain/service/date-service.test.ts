import DateService from '../../../../src/domain/service/date-service'

describe('Date domain service', () => {
  test('should return how much years', () => {
    const startDate = new Date('2020-01-05T00:00:00.000Z')
    const endDate = new Date('2023-07-05T00:00:00.000Z')
    const dateService = new DateService()
    dateService.init(startDate, endDate)
    expect(dateService.timeInYears()).toBe(3.5)
  })

  test('should return how much months', () => {
    const startDate = new Date('2020-01-05T00:00:00.000Z')
    const endDate = new Date('2023-07-05T00:00:00.000Z')
    const dateService = new DateService()
    dateService.init(startDate, endDate)
    expect(dateService.timeInMonths()).toBe(42)
  })

  test('should returns false to date`s invalid range', () => {
    const startDate = new Date('2020-01-05T00:00:00.000Z')
    const endDate = new Date('2023-07-05T00:00:00.000Z')
    const dateService = new DateService()
    dateService.init(startDate, endDate)
    expect(dateService.isInvalidRangeOfDate()).toBeFalsy()
  })

  test('should returns true to date`s invalid range', () => {
    const startDate = new Date('2023-07-05T00:00:00.000Z')
    const endDate = new Date('2020-01-05T00:00:00.000Z')
    const dateService = new DateService()
    dateService.init(startDate, endDate)
    expect(dateService.isInvalidRangeOfDate()).toBeTruthy()
  })
})
