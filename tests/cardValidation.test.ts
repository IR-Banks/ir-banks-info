import { it, expect } from 'vitest'
import { isCardNumberValid } from '../src/index'

it('validate cardNumber', () => {
  expect(isCardNumberValid(6037697456637302)).toBeTruthy()
  expect(isCardNumberValid(6219861900290940)).toBeTruthy()
  isCardNumberValid
  expect(isCardNumberValid(6219861900290941)).toBeFalsy()
  expect(isCardNumberValid(1234567891234569)).toBeFalsy()
  expect(isCardNumberValid(6219861)).toBeFalsy()
})
