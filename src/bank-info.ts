import { bankData } from './data/banks'

/**
 * Get bank info based on the first 6 digits of a card number..
 * @param {number} cardNumber - A card number with at least 6 digits.
 * @returns {getBankInfoType | null} - The bank information or null if not found.
 */

export interface getBankInfoType {
  name: string
  logo: string
}
export function getBankInfo(cardNumber: number): getBankInfoType | null {
  const cardNumberCode = cardNumber.toString().substring(0, 6)
  return bankData[cardNumberCode] || null
}
