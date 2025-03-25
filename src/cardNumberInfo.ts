import { bankData } from './data/banks'

export interface getBankInfoWithCardNumberType {
  name: string
  logo: string
}

/**
 * @description Get bank info based on the first 6 digits of a card number.
 * @param {string} cardNumber - A card number with at least 6 digits.
 * @return {{getBankInfoWithCardNumberType | null}} The bank information or null if not found.
 */
export function getBankInfoWithCardNumber(
  cardNumber: string
): getBankInfoWithCardNumberType | null {
  const cardNumberCode = cardNumber.substring(0, 6)
  return bankData[cardNumberCode] || null
}
