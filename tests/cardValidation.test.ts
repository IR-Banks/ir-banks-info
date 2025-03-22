import { it, expect } from 'vitest'
import { verifyCardNumber } from '../src/verify-cardNumber'

it('validate cardNumber', () => {
  expect(verifyCardNumber(6037697456637302)).toBeTruthy()
  expect(verifyCardNumber(6219861900290940)).toBeTruthy()

  expect(verifyCardNumber(6219861900290941)).toBeFalsy()
  expect(verifyCardNumber(1234567891234569)).toBeFalsy()
  expect(verifyCardNumber(6219861)).toBeFalsy()
})
