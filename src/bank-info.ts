import { bankData } from './banks'

/**
 * Get bank info based on card number.
 * @param cardNumber - The bank card number.
 * @returns BankInfo or null if not found.
 */
export function getBankInfo(cardNumber: number) {
  const cardNumberCode = cardNumber.toString().substring(0, 6)
  const bankInfo = bankData[cardNumberCode]
  return bankInfo
}
