import { describe, it, expect } from 'vitest'
import { getBankInfo } from '../src/index'
import config from '../src/config/index'
const baseUrl = config.baseUrl

describe('getBankInfo', () => {
  it('should return correct bank info for a valid card number', () => {
    const cardNumber = 6037697456637302
    const bankInfo = getBankInfo(cardNumber)
    expect(typeof bankInfo).toBe('object')
    expect(bankInfo).toEqual(
      expect.objectContaining({
        name: 'صادرات ایران',
        logo: baseUrl + '/Saderat.svg',
      })
    )
  })

  it('should return info for fewer than 6 digits', () => {
    const cardNumber = 603769
    const bankInfo = getBankInfo(cardNumber)
    expect(typeof bankInfo).toBe('object')
    expect(bankInfo).toEqual(
      expect.objectContaining({
        name: 'صادرات ایران',
        logo: baseUrl + '/Saderat.svg',
      })
    )
  })

  it('should handle invalid card numbers', () => {
    const cardNumber = 1234567891234569
    const bankInfo = getBankInfo(cardNumber)
    expect(bankInfo).toBeUndefined()
  })

  it('should handle fewer than 6 digits', () => {
    const cardNumber = 60376
    const bankInfo = getBankInfo(cardNumber)
    expect(bankInfo).toBeUndefined()
  })
})
