import { bankData } from '@/data/banks'

/**
 * Get bank info based on card number.
 * @param cardNumber - The bank card number.
 * @returns BankInfo or null if not found.
 */

interface getBankInfoType {
  name: string
  logo: string
}
export function getBankInfo(cardNumber: number): getBankInfoType {
  const cardNumberCode = cardNumber.toString().substring(0, 6)
  const bankInfo = bankData[cardNumberCode]
  return bankInfo
}
