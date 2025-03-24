import { describe, it, expect } from 'vitest'
import { getShebaInfo } from '../src/index'
import config from '../src/config/index'
const baseUrl = config.baseUrl
describe('getShebaInfo', () => {
  it('should return correct bank info for a valid sheba', () => {
    const shebaInfo = getShebaInfo('IR740190000000306872721006')
    expect(typeof shebaInfo).toBe('object')
    expect(shebaInfo).toEqual(
      expect.objectContaining({
        code: '019',
        nickname: 'saderat',
        name: 'Saderat Bank',
        persianName: 'بانک صادرات ایران',
        logo: baseUrl + '/Saderat.svg',
      })
    )
  })
  it('should return correct bank info for a valid sheba', () => {
    const shebaInfo = getShebaInfo('IR810700010001112755767001')
    expect(typeof shebaInfo).toBe('object')
    expect(shebaInfo).toEqual(
      expect.objectContaining({
        code: '070',
        nickname: 'resalat',
        name: 'Resalat Bank',
        persianName: 'بانک قرض الحسنه رسالت',
        logo: baseUrl + '/Resalat.svg',
      })
    )
  })

  it('invalid sheba', () => {
    const shebaInfo = getShebaInfo('IR810700010001755767001')
    expect(shebaInfo).toBeNull()
  })
})
