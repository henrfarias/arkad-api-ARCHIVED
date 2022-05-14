import { IError } from '@shared/error'

export class InvestmentErrors {
  static invalidRangeDate(): IError {
    return {
      statusCode: 400,
      message: 'Invalid range of date',
      entityName: 'Investment',
    }
  }
}
