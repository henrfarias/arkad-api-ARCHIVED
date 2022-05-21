import Investment from '@domain/entity/investment'
import { BadRequest } from '@domain/errors/base-errors/bad-request'
import { IInputInvestmentEntity } from '@domain/interface/investment'
import DateService from '@domain/service/date-service'

describe('Investment entity', () => {
  test('Should simulate the initial investment with compound interest', () => {
    const investmentData: IInputInvestmentEntity = {
      applicationDate: new Date('2022-01-01T00:00:00.000Z'),
      dueDate: new Date('2024-01-01T00:00:00.000Z'),
      annualInterest: 6.4,
      initialValue: 1000,
    }
    const dateService = new DateService()
    const investment = new Investment(investmentData, dateService)
    const result = investment.simulate()
    expect(result).toBe(1132.1)
  })

  test('Should create a investment with an error if dueDate is smallest of applicationDate', () => {
    const investmentData: IInputInvestmentEntity = {
      applicationDate: new Date('2024-01-01T00:00:00.000Z'),
      dueDate: new Date('2022-01-01T00:00:00.000Z'),
      annualInterest: 6.4,
      initialValue: 1000,
    }
    const dateService = new DateService()
    const investment = new Investment(investmentData, dateService)
    expect(investment.isThereError()).toBeTruthy()
    expect(investment.error).toStrictEqual(new BadRequest('Invalid range date'))
  })
})
