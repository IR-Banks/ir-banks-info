import { expect, it } from 'vitest'
import { isShebaValid } from '../src'

it('validate sheba', () => {
  expect(isShebaValid('740190000000306872721006')).toBeTruthy()
  expect(isShebaValid('IR740190000000306872721006')).toBeTruthy()
  expect(isShebaValid('ir740190000000306872721006')).toBeTruthy()

  expect(isShebaValid('IR740190000000306872721')).toBeFalsy()
  expect(isShebaValid('IR740190000000306872721456')).toBeFalsy()
  expect(isShebaValid('BH740190000000306872721456')).toBeFalsy()
})
