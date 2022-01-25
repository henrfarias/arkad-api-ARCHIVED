import Investment, {
  IInputInvestmentEntity,
} from '../../src/domain/entity/investment'

describe('Investment entity', () => {
  test('Should simulate the initial investment with compound interest ', () => {
    const investmentData: IInputInvestmentEntity = {
      applicationDate: new Date('2022-01-01T00:00:00.000Z'),
      dueDate: new Date('2024-01-01T00:00:00.000Z'),
      annualInterest: 6.4,
      initialValue: 1000,
    }
    const investment = new Investment(investmentData)
    const result = investment.simulate()
    expect(result).toBe(1132.1)
  })

  test('Should simulate the initial investment with compound interest and monthly contribution', () => {
    const investmentData: IInputInvestmentEntity = {
      applicationDate: new Date('2022-01-01T00:00:00.000Z'),
      dueDate: new Date('2027-01-01T00:00:00.000Z'),
      annualInterest: 5,
      initialValue: 10000,
    }
    const investment = new Investment(investmentData)
    const result = investment.simulate(500)
    expect(result).toBe(46765.86)
  })
})
