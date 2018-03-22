<p align="center">
  <img src="https://raw.githubusercontent.com/bukharim96/pregx/master/assets/PregX_logo@74.76percent.png" />
</p>

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

#### Use-case Examples

A few perfect examples of `PregX`'s usefulness would be:

## getCreditCardNumber()
> Supports all major credit cards types: American Express (Amex); Discover; Mastercard &amp; Visa. This function matches Visa card numbers by default.
```javascript
let str = `
My Visa card number: 			 4111111111111111
My MasterCard card number: 		 5500000000000004
My American Express card number:         370000000000009
My Discover card number: 		 6011000000000004
`

console.log( getCreditCardNumber(str) )
// matches: ["4111111111111111"]

console.log( getCreditCardNumber(str, { cardType: 'mastercard' }) )
// matches: ["5500000000000004"]

console.log( getCreditCardNumber(str, { cardType: 'amex' }) )
// matches: ["370000000000009"]

console.log( getCreditCardNumber(str, { cardType: 'discover' }) )
// matches: ["6011000000000004"]
```

### getBTC()
> Matches a string that starts with either **1** or **3** followed by a set of **26** to **33** characters of of the variation: **a-z**; **A-Z**; and **0-9**, excluding invalid Bitcoin address characters such as: **O**; **I**; and **l**.
```javascript
let str = 'My Bitcoin wallet id is: 3QJmV3qfvL9SuYo34YihAf3sRCW3qSinyC'

console.log( getBTC(str) )
// matches: ['3QJmV3qfvL9SuYo34YihAf3sRCW3qSinyC']
```

#### getPostalCode()
> Supports all global postal codes. Pattern by default matches five primary digits and allows the option of having a hyphen and four extended digits. This matches all postal codes, however it is possible for there to be a match of five digits that is not a zip code.
```javascript
let str = `
Postal Code Examples:
	- Canada: A1A 1A1
	- UK: SW1A 2AA
	- Uzbekistan: 200100
	- Japan: 9040205
	- Malta: BML 2060
`

console.log( getPostalCode(str, { format: 'CA' }) ) // matches: ["A1A 1A1"]
console.log( getPostalCode(str, { format: 'GB' }) ) // matches: ["SW1A 2AA"]
console.log( getPostalCode(str, { format: 'UZ' }) ) // matches: ["200100"]
console.log( getPostalCode(str, { format: 'JP' }) ) // matches: ["9040205"]
console.log( getPostalCode(str, { format: 'MT' }) ) // matches: ["BML 206"]
```

#### getPOBox()
> Matches 'POB ...', 'PO Box ...'and 'Post Office Box ...'
```javascript
let str = `
Mail us at: PO Box 47369
Mail us at: POB 47369
Mail us at: Post Office Box 47369
`

console.log( getPOBox(str) ) // matches: ["PO Box 47369", "POB 47369", "Post Office Box 47369"]
```

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

I intend to make this package the greatest collection of its kind, and I hope to reach a **~100** patterns.

## API &amp; Docs

For further documentation and use-case examples of all APIs, click [here](https://github.com/bukharim96/pregx/blob/master/docs/DOCUMENTATION.md).

## [Credits](https://github.com/bukharim96/pregx/blob/master/CREDITS.md)

A huge thanks to all the devs mentioned in my CREDITS.md file for some of their RegExp patterns that facilitated the compilation of PregX, which otherwise would have been more of a pain to build. Thanks a lot. :)

## Contributing

PregX is a free and open source library, and I'd appreciate any help you're willing to give - be it fixing bugs, improving documentation, or suggesting new features or enhancements.

## [License](https://github.com/bukharim96/pregx/blob/master/LICENSE)

PregX is licensed under the **MIT License** which makes it great for both personal and commercial use.

*Enjoy* ;)
