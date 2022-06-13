import IncomeTax from '@domain/entity/incomeTax'
import DateService from '@domain/service/date-service'

describe('Income tax entity', () => {
  test('should deduct from the amount invested for 1 year', () => {
    const startDate = new Date('2021-05-20')
    const endDate = new Date('2022-05-20')
    const dateService = new DateService(startDate, endDate)
    const sut = new IncomeTax(dateService)
    const result = sut.deduct(30000)
    expect(result).toBe(24000)
  })
})
