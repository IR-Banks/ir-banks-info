/**
 * @description Get bank info based on the first 6 digits of a card number..
 * @param {number} cardNumber - A card number with at least 6 digits.
 * @returns {getBankInfoWithCardNumberType | null} - The bank information or null if not found.
 */

import { bankData } from './data/banks'

export interface getBankInfoWithCardNumberType {
  name: string
  logo: string
}
export function getBankInfoWithCardNumber(
  cardNumber: number
): getBankInfoWithCardNumberType | null {
  const cardNumberCode = cardNumber.toString().substring(0, 6)
  return bankData[cardNumberCode] || null
}
