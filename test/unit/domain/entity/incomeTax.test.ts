import IncomeTax from '@domain/entity/incomeTax'
import DateService from '@domain/service/date-service'

describe('Income tax entity', () => {
  test('should deduct from the amount invested for 1 year', () => {
    const dateService = new DateService()
    dateService.init(new Date('2021-05-20'), new Date('2022-05-20'))
    const sut = new IncomeTax(dateService)
    const result = sut.deduct(300)
    expect(result).toBe(240)
  })
})
