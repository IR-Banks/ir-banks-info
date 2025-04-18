import { describe, it, expect } from 'vitest'
import { getBankInfoWithCardNumber } from '../src/index'
import config from '../src/config/index'
const baseUrl = config.baseUrl

describe('getBankInfo', () => {
  it('should return correct bank info for a valid card number', () => {
    const cardNumber = '6037697456637302'
    const bankInfo = getBankInfoWithCardNumber(cardNumber)
    expect(typeof bankInfo).toBe('object')
    expect(bankInfo).toEqual(
      expect.objectContaining({
        name: 'بانک صادرات ایران',
        logo: baseUrl + '/Saderat.svg',
      })
    )
  })

  it('should return info for fewer than 6 digits', () => {
    const cardNumber = '603769'
    const bankInfo = getBankInfoWithCardNumber(cardNumber)
    expect(typeof bankInfo).toBe('object')
    expect(bankInfo).toEqual(
      expect.objectContaining({
        name: 'بانک صادرات ایران',
        logo: baseUrl + '/Saderat.svg',
      })
    )
  })

  it('should handle invalid card numbers', () => {
    const cardNumber = '1234567891234569'
    const bankInfo = getBankInfoWithCardNumber(cardNumber)
    expect(bankInfo).toBeNull()
  })

  it('should handle fewer than 6 digits', () => {
    const cardNumber = '60376'
    const bankInfo = getBankInfoWithCardNumber(cardNumber)
    expect(bankInfo).toBeNull()
  })
})
