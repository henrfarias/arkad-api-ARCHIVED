/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
class Right<L, R> {
  public value: R

  constructor(value: R) {
    this.value = value
  }

  isRight(): this is Right<L, R> {
    return this instanceof Right
  }

  isLeft(): this is Right<L, R> {
    return this instanceof Left
  }
}

class Left<L, R> {
  public value: L

  constructor(value: L) {
    this.value = value
  }

  isLeft(): this is Left<L, R> {
    return this instanceof Left
  }

  isRight(): this is Left<L, R> {
    return this instanceof Right
  }
}

export const right = <L, R>(value: R): Right<L, R> => new Right(value)

export const left = <L, R>(value: L): Left<L, R> => new Left(value)

export type Either<L, R> = Left<L, R> | Right<L, R>
