/**
 * @license IT License (MIT-style)
 * Copyright (c) 2017 Ali Torki
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files...
 *
 * @source https://github.com/persian-tools/persian-tools
 */

import { shebaCodes, getBankInfoWithShebaType } from './data/sheba'

export const shebaPattern = /IR[0-9]{24}/

export const shebaPatternCode = /IR[0-9]{2}([0-9]{3})[0-9]{19}/

/**
 * @description Retrieves bank information based on a Sheba (IBAN) code.
 * @param {string} shebaCode  The Sheba code (IBAN). It can start with "IR" or be provided without it.
 * @returns {{getBankInfoWithShebaType | null}} The bank information or null if invalid.
 *
 */
export function getBankInfoWithSheba(
  shebaCode: string
): getBankInfoWithShebaType | null {
  if (!isShebaValid(shebaCode)) {
    return null
  }
  if (!shebaCode.startsWith('IR')) shebaCode = `IR${shebaCode}`
  const res = shebaPatternCode.exec(shebaCode)
  const codeAsString = res?.[1] ?? ''
  const code = parseInt(codeAsString, 10)
  const bank = {
    ...(shebaCodes[code] || {}),
  }

  return bank
}

export function shebaIso7064Mod97(iban: string): number {
  let remainder = iban,
    block

  while (remainder.length > 2) {
    block = remainder.slice(0, 9)
    remainder = (parseInt(block, 10) % 97) + remainder.slice(block.length)
  }

  return parseInt(remainder, 10) % 97
}

export function isShebaValid(shebaCode: string): boolean {
  shebaCode = shebaCode.toUpperCase()

  if (!shebaCode.startsWith('IR')) shebaCode = `IR${shebaCode}`

  if (shebaCode.length !== 26) {
    return false
  }

  if (!shebaPattern.test(shebaCode)) {
    return false
  }

  const d1 = shebaCode.charCodeAt(0) - 65 + 10
  const d2 = shebaCode.charCodeAt(1) - 65 + 10

  let newStr = shebaCode.substr(4)
  newStr += d1.toString() + d2.toString() + shebaCode.substr(2, 2)

  const remainder = shebaIso7064Mod97(newStr)

  return remainder === 1
}
