import { describe, it, expect } from 'vitest'
import { getBankInfoWithSheba } from '../src/index'

describe('getShebaInfo', () => {
  it('should return correct bank info for a valid sheba', () => {
    const shebaInfo = getBankInfoWithSheba('IR740190000000306872721006')
    expect(typeof shebaInfo).toBe('object')
    expect(shebaInfo).toEqual(
      expect.objectContaining({
        code: '019',
        nickname: 'saderat',
        name: 'Saderat Bank',
        persianName: 'بانک صادرات ایران',
        logo: expect.stringMatching(/^data:image\/svg\+xml,/),
      })
    )
  })
  it('should return correct bank info for a valid sheba', () => {
    const shebaInfo = getBankInfoWithSheba('IR810700010001112755767001')
    expect(typeof shebaInfo).toBe('object')
    expect(shebaInfo).toEqual(
      expect.objectContaining({
        code: '070',
        nickname: 'resalat',
        name: 'Resalat Bank',
        persianName: 'بانک قرض الحسنه رسالت',
        logo: expect.stringMatching(/^data:image\/svg\+xml,/),
      })
    )
  })

  it('invalid sheba', () => {
    const shebaInfo = getBankInfoWithSheba('IR810700010001755767001')
    expect(shebaInfo).toBeNull()
  })
})
