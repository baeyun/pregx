
<h1 align="center">PregX</h1>

<p align="center">
	<strong>Largest library of popular &amp; commonly used RegExp patterns for JavaScript.</strong>
	<br>
	<small>Only ~92kb, no external dependencies &amp; supports all major browsers</small>
</p>

This package currently consists of 35 common RegExp patterns. We hoping to be the largest collection of this sort with the contribution of all who find it useful. Highlights:

> - Built-up with a ***Functional Programming Paradigm*** in mind
> - **Easy** to use and get started with
> - **Light-weight**, minified version is ~92kb
> - **No dependencies**, we tried avoiding the clutter of dependencies
> - **Consistency** across browsers (including the notorious Internet Explorer)
> - **MIT Licensed**, perfect for personal and commercial use

## Getting started
### Installation

Currently only available on `npm`.

```
npm install pregx --save
```

Alternatively, you may include the files in the `dist/` folder in your HTML pages:

```html
<!-- DEVELOPMENT VERION -->
<script type="text/javascript" src="./dist/pregx.js"></script>

<!-- PRODUCTION VERION -->
<script type="text/javascript" src="./dist/pregx.min.js"></script>
```

### Import / require() Package
#### ES6 Import Approach
Start by either importing all functions from from `pregx`, eg:

```javascript
import * as pregx from 'pregx'
```

Or, more preferably, import only the functions you require via `destructuring`, eg:

```javascript
import { getDate, getIp, getIsbn, getDomain, getUrl } from 'pregx'
```

#### NPM / CommonJS require() Approach

```javascript
var pregx = require('pregx')
```

### Use-case Examples

A perfect example of PregX's usefulness would be matching credit card numbers of a variety of providers, including but not limited to:
> - American Express (Amex)
> - Discover
> - Mastercard
> - Visa
> - and more...

```javascript
let str = `
My American Express credit card number is: 3400 0000 0000 009.
My Australian BankCard‎ number is: 5610 5910 8101 8250.
My Visa credit card number is: 4111 1111 1111 1111.
My MasterCard card number is: 5500 0000 0000 0004.
My Discover card number is: 6011 0000 0000 0004.
`

console.log( pregx.getCreditCardNumber(str) )

// output:
//  [
//      '3400 0000 0000 009',
//      '5610 5910 8101 8250',
//      '4111 1111 1111 1111',
//      '5500 0000 0000 0004',
//      '6011 0000 0000 0004'
//  ]
```

For the sake of showcasing PregX's features, namely the pattern configuration options parsed as the 2nd argument of each `get[Pattern]` function, eg:

```javascript
let str1 = 'My Bitcoin wallet id is: 3QJmV3qfvL9SuYo34YihAf3sRCW3qSinyC',
    str2 = '3QJmV3qfvL9SuYo34YihAf3sRCW3qSinyC'

/* Pattern search without the strict config */
console.log( pregx.getBtc(str1) ) // output: ['3QJmV3qfvL9SuYo34YihAf3sRCW3qSinyC']
console.log( pregx.getBtc(str2) ) // output: ['3QJmV3qfvL9SuYo34YihAf3sRCW3qSinyC']

/* Now check what happens when the strict config is set to true */
console.log( pregx.getBtc(str1, { strict: true }) ) // output: null
console.log( pregx.getBtc(str2, { strict: true }) ) // output: ['3QJmV3qfvL9SuYo34YihAf3sRCW3qSinyC'] 
```

The `getBitcoin` function's pattern matches a string that starts with either the number 1 or 3 and, after that, contains 26 - 33 characters of either a-z, A-Z, 0-9, excluding O, I and l (not valid characters in a Bitcoin address).

These are only but a few examples of the several **commonly used patterns** that this awesome collection contains.

### Currently Supported Patterns (35)

- [X] alpha-numeric
- [X] alphabet
- [X] btc
- [X] credit-card-number
- [X] date
- [X] digits
- [X] domain
- [X] email
- [X] git-repo
- [X] hex-color
- [X] html-tag
- [X] iban
- [X] ip
- [X] ipv4
- [X] ipv6
- [X] isbn
- [X] mac-address
- [X] md5
- [X] password
- [X] phone-number
- [X] po-box
- [X] postal-code
- [X] price
- [X] sha1
- [X] sha256
- [X] ssn
- [X] street-address
- [X] time
- [X] url-slug
- [X] url
- [X] us-state-abbrev
- [X] us-state
- [X] username
- [X] uuid
- [X] zipcode

## API &amp; Docs

For further documentation and use-case examples of all APIs, click [here](https://github.com/bukharim96/pregx/blob/master/docs/DOCUMENTATION.md).

## [Credits](https://github.com/bukharim96/pregx/blob/master/CREDITS.md)

A huge thanks to all the devs mentioned in my CREDITS.md file for some of their RegExp patterns that facilitated the compilation of PregX, which otherwise would have been more of a pain to build. Thanks a lot. :)

## Contributing

PregX is a free and open source library, and I'd appreciate any help you're willing to give - be it fixing bugs, improving documentation, or suggesting new features or enhancements.

## [License](https://github.com/bukharim96/pregx/blob/master/LICENSE)

PregX is licensed under the **MIT License** which makes it great for both personal and commercial use.

*Enjoy* ;)
