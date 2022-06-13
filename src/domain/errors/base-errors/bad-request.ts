import { CustomError } from '@shared/error'

export class BadRequest extends Error implements CustomError {
  public code: number

  constructor(message: string) {
    super(message)
    this.code = 400
  }
}
