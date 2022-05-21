export class BadRequest extends Error {
  public code: number

  constructor(message: string) {
    super(message)
    this.code = 400
  }
}
