<p align="center">
  <img src="https://raw.githubusercontent.com/bukharim96/pregx/master/assets/PregX_logo@74.76percent.png" />
</p>

<p align="center">
	<strong>Largest library of popular &amp; commonly used RegExp patterns for JavaScript.</strong>
	<br>
	<small>Only ~92kb, no external dependencies &amp; supports all major browsers</small>
</p>

<p class="rich-diff-level-zero" align="center">
	<a href="http://inch-ci.org/github/bukharim96/pregx" rel="nofollow" class="rich-diff-level-one">
		<img src="https://camo.githubusercontent.com/a9764da709f446351197ab0f6e33816aef715bff/687474703a2f2f696e63682d63692e6f72672f6769746875622f62756b686172696d39362f70726567782e7376673f6272616e63683d6d6173746572" alt="Inline docs" data-canonical-src="http://inch-ci.org/github/bukharim96/pregx.svg?branch=master" style="max-width:100%;">
	</a>
	<a href="https://github.com/bukharim96/pregx/blob/master/package.json" class="rich-diff-level-one">
		<img src="https://camo.githubusercontent.com/a0aa77f4944442dabbb8c5a8a3c751c23898e759/68747470733a2f2f64617669642d646d2e6f72672f62756b686172696d39362f70726567782e737667" alt="dependencies" data-canonical-src="https://david-dm.org/bukharim96/pregx.svg" style="max-width:100%;">
	</a>
	<a href="https://badge.fury.io/js/pregx" rel="nofollow" class="rich-diff-level-one">
		<img src="https://camo.githubusercontent.com/623e2f84b59900a4091f658b6c3a3052e464c34c/68747470733a2f2f62616467652e667572792e696f2f6a732f70726567782e737667" alt="npm version" data-canonical-src="https://badge.fury.io/js/pregx.svg" style="max-width:100%;">
	</a>
	<a href="https://github.com/bukharim96/pregx/issues" class="rich-diff-level-one">
		<img src="https://camo.githubusercontent.com/305793f485a40f755c997b155ecf8a37c1b27b76/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6973737565732f62756b686172696d39362f70726567782e737667" alt="GitHub issues" data-canonical-src="https://img.shields.io/github/issues/bukharim96/pregx.svg" style="max-width:100%;">
	</a>
	<a href="https://github.com/bukharim96/pregx/network" class="rich-diff-level-one">
		<img src="https://camo.githubusercontent.com/0a015eaf16d767f6564707fafc53a2c6a6bdf876/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f666f726b732f62756b686172696d39362f70726567782e737667" alt="GitHub forks" data-canonical-src="https://img.shields.io/github/forks/bukharim96/pregx.svg" style="max-width:100%;">
	</a>
	<a href="https://github.com/bukharim96/pregx/stargazers" class="rich-diff-level-one">
		<img src="https://camo.githubusercontent.com/741513f5637483dbc0323cf452fc0f01b47f4b05/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f62756b686172696d39362f70726567782e737667" alt="GitHub stars" data-canonical-src="https://img.shields.io/github/stars/bukharim96/pregx.svg" style="max-width:100%;">
	</a>
	<a href="https://github.com/bukharim96/pregx/blob/master/LICENSE" class="rich-diff-level-one">
		<img src="https://camo.githubusercontent.com/8af1af5c402a37c2066dd9148871316ee566d2fe/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f62756b686172696d39362f70726567782e737667" alt="GitHub license" data-canonical-src="https://img.shields.io/github/license/bukharim96/pregx.svg" style="max-width:100%;">
	</a>
	<a href="https://twitter.com/intent/tweet?text=Wow:&amp;url=https%3A%2F%2Fgithub.com%2Fbukharim96%2Fpregx" rel="nofollow" class="rich-diff-level-one">
		<img src="https://camo.githubusercontent.com/43481b6b18645bb992ee2d33bed4b617d7b812ab/68747470733a2f2f696d672e736869656c64732e696f2f747769747465722f75726c2f68747470732f6769746875622e636f6d2f62756b686172696d39362f70726567782e7376673f7374796c653d736f6369616c" alt="Twitter" data-canonical-src="https://img.shields.io/twitter/url/https/github.com/bukharim96/pregx.svg?style=social" style="max-width:100%;">
	</a>
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
