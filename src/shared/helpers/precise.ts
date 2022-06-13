export default function precise(number: number, float = 0): number {
  return +number.toFixed(float)
}
