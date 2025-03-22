/**
 * @description  Validates an Iranian bank card number using the Luhn algorithm.
 *
 * @category Bank account
 * @public
 * @method verifyCardNumber
 * @param {number} digits - Card number (must be 16 digits)
 * @return {boolean} - Returns `true` if valid, `false` if invalid, and `undefined` for empty input.
 */
export function verifyCardNumber(digits: number): boolean | undefined {
  if (!digits) return
  const digitsResult = String(digits)

  const length = digitsResult.length

  if (
    length < 16 ||
    parseInt(digitsResult.substr(1, 10), 10) === 0 ||
    parseInt(digitsResult.substr(10, 6), 10) === 0
  ) {
    return false
  }

  let radix,
    subDigit,
    sum = 0

  for (let i = 0; i < 16; i++) {
    radix = i % 2 === 0 ? 2 : 1

    subDigit = parseInt(digitsResult.substr(i, 1), 10) * radix
    sum += subDigit > 9 ? subDigit - 9 : subDigit
  }
  return sum % 10 === 0
}
