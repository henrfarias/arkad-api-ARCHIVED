class Left<L, R> {
  public value: L;

  constructor(value: L) {
    this.value = value;
  }

  isLeft(): this is Left<L, R> {
    return this instanceof Left;
  }
}

export const left = <L, R>(value: L): Left<L, R> => new Left(value);
