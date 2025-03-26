<div align="center">
	<p align="center">
		<img src="./images/logo.png" width="200" alt="PersianTools logo" />
	</p>
	<h1 align="center">Iranian Banks Information</h1>

![codecov](https://img.shields.io/npm/v/ir-banks-info)
![GitHub license](https://img.shields.io/github/license/ir-banks/ir-banks-info)
![npm downloads](https://img.shields.io/npm/d18m/ir-banks-info.svg)
![GitHub Stars](https://img.shields.io/github/stars/ir-banks/ir-banks-info?style=social)

</div>
<hr />

## Live Demo

<div align="center">
	<p align="center">
		<img src="./images/demo.jpg" width="200" alt="PersianTools logo" />
	</p>
	<a align="center" href="https://irbanks.norouzy.ir/" target="_blank">LIVE DEMO</a>

</div>

## Features

- [Identify Iranian Bank (Name & Logo) from Card Number](#iranian-bank-name--logo-from-card-number).
- [Identify Iranian Bank (Name & Logo) from Sheba(IBAN)](#iranian-bank-name--logo-from-shebaiban).
- [Validate Iran’s Sheba (IBAN) Number](#validate-sheba-iban).
- [Validate Iranian Bank Card Number](#validate-card-number).

### Install

Install the ir-banks-info package in your project using <a href="https://yarnpkg.com/en/" target="_blank">yarn</a> <em>or</em> <a href="https://docs.npmjs.com/cli/npm" target="_blank">npm</a>.

```bash
$ npm install --save ir-banks-info
```

or

```bash
$ yarn add ir-banks-info
```

## Usage

### Iranian Bank (Name & Logo) from Sheba(IBAN)

```javascript
import { getBankInfoWithSheba } from 'ir-banks-info'

getBankInfoWithSheba('IR740190000000306872721006')

/*
output:
{
    code: '019',
    nickname: 'saderat',
    name: 'Saderat Bank',
    persianName: 'بانک صادرات ایران',
    logo: 'https://ir-banks.github.io/logos/banks/Saderat.svg',
}

*/
```

### Iranian Bank (Name & Logo) from Card Number

```javascript
import { getBankInfoWithCardNumber } from 'ir-banks-info'

getBankInfoWithCardNumber('603769')

//or

getBankInfoWithCardNumber('6037697456637302')

/*
output:
{
    name: 'بانک صادرات ایران',
    logo: 'https://ir-banks.github.io/logos/banks/Saderat.svg',
}

*/
```

### Validate Sheba (IBAN)

```javascript
import { isShebaValid } from 'ir-banks-info'

isShebaValid('740190000000306872721006') //true
isShebaValid('IR740190000000306872721006') //true
isShebaValid('ir740190000000306872721006') //true

isShebaValid('IR740190000000306872721') //false
isShebaValid('IR740190000000306872721456') //false
isShebaValid('BH740190000000306872721456') //false
```

### Validate Card Number

```javascript
import { isCardNumberValid } from 'ir-banks-info'

isCardNumberValid('6037697456637302') //true
isCardNumberValid('6219861900290940') //true

isCardNumberValid('6219861900290941') //false
isCardNumberValid('1234567891234569') //false
isCardNumberValid('6219861') //false
```
