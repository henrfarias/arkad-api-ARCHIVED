import Investment from '@domain/entity/investment'
import { IInputInvestmentEntity } from '@domain/interface/investment'
import DateService from '@domain/service/date-service'

describe('Investment entity', () => {
  test('should simulate the initial investment with compound interest', () => {
    const investmentData: IInputInvestmentEntity = {
      applicationDate: new Date('2022-01-01T00:00:00.000Z'),
      dueDate: new Date('2024-01-01T00:00:00.000Z'),
      annualInterest: 6.4,
      initialValue: 1000,
    }
    const dateService = new DateService(
      investmentData.applicationDate,
      investmentData.dueDate
    )
    const investment = new Investment(investmentData, dateService)
    const result = investment.simulate()
    expect(result).toBe(1132.1)
  })

  test('should throw an error if dueDate is smallest of applicationDate', () => {
    const investmentData: IInputInvestmentEntity = {
      applicationDate: new Date('2024-01-01T00:00:00.000Z'),
      dueDate: new Date('2022-01-01T00:00:00.000Z'),
      annualInterest: 6.4,
      initialValue: 1000,
    }
    const dateService = new DateService(
      investmentData.applicationDate,
      investmentData.dueDate
    )
    expect(() => new Investment(investmentData, dateService)).toThrow(
      new Error('Invalid range of date')
    )
  })

  test('should return the gross profit from investment', () => {
    const investmentData: IInputInvestmentEntity = {
      applicationDate: new Date('2022-01-01T00:00:00.000Z'),
      dueDate: new Date('2024-01-01T00:00:00.000Z'),
      annualInterest: 6.4,
      initialValue: 1000,
    }
    const dateService = new DateService(
      investmentData.applicationDate,
      investmentData.dueDate
    )
    const investment = new Investment(investmentData, dateService)
    const result = investment.getGrossProfit()
    expect(result).toBe(132.1)
  })
})
