/*
 * PregX
 *
 * @author bukharim96 <bukharim96@gmail.com>
 */

export { default as getAlphaNumeric } from './src/patterns/alpha-numeric'
export { default as getAlphabet } from './src/patterns/alphabet'
export { default as getBtc } from './src/patterns/btc'
export { default as getCreditCardNumber } from './src/patterns/credit-card-number'
export { default as getDate } from './src/patterns/date'
export { default as getDigits } from './src/patterns/digits'
export { default as getDomain } from './src/patterns/domain'
export { default as getEmail } from './src/patterns/email'
export { default as getGitRepo } from './src/patterns/git-repo'
export { default as getHexColor } from './src/patterns/hex-color'
export { default as getHtmlTag } from './src/patterns/html-tag'
export { default as getIban } from './src/patterns/iban'
export { default as getIp } from './src/patterns/ip'
export { default as getIpv4 } from './src/patterns/ipv4'
export { default as getIpv6 } from './src/patterns/ipv6'
export { default as getIsbn } from './src/patterns/isbn'
export { default as getMacAddress } from './src/patterns/mac-address'
export { default as getMd5 } from './src/patterns/md5'
export { default as getPassword } from './src/patterns/password'
export { default as getPhoneNumber } from './src/patterns/phone-number'
export { default as getPoBox } from './src/patterns/po-box'
export { default as getPostalCode } from './src/patterns/postal-code'
export { default as getPrice } from './src/patterns/price'
export { default as getSha1 } from './src/patterns/sha1'
export { default as getSha256 } from './src/patterns/sha256'
export { default as getSsn } from './src/patterns/ssn'
export { default as getStreetAddress } from './src/patterns/street-address'
export { default as getTime } from './src/patterns/time'
export { default as getUrlSlug } from './src/patterns/url-slug'
export { default as getUrl } from './src/patterns/url'
export { default as getUsStateAbbrev } from './src/patterns/us-state-abbrev'
export { default as getUsState } from './src/patterns/us-state'
export { default as getUsername } from './src/patterns/username'
export { default as getUuid } from './src/patterns/uuid'
export { default as getZipcode } from './src/patterns/zipcode'

/*
// USE-CASE EXAMPLES

// Matching credit card numbers
// 
// Supports all major credit cards:
// 		- American Express (Amex)
// 		- Discover
// 		- Mastercard
// 		- Visa

let str = `
My American Express credit card number is: 3400 0000 0000 009.
My Australian BankCard‎ number is: 5610 5910 8101 8250.
My Visa credit card number is: 4111 1111 1111 1111.
My MasterCard card number is: 5500 0000 0000 0004.
My Discover card number is: 6011 0000 0000 0004.
`

console.log( pregx.getCreditCardNumber(str) )

// output:
// 	[
// 		'3400 0000 0000 009',
// 		'5610 5910 8101 8250',
// 		'4111 1111 1111 1111',
// 		'5500 0000 0000 0004',
// 		'6011 0000 0000 0004'
// 	]



// Matching Bitcoin address
// 
// Matches a string that starts with either 1 or 3 and,
// after that, contains 26 to 33 characters of either a-z,
// A-Z, 0-9, excluding O, I and l (not valid characters in
// a Bitcoin address)
 
let str1 = 'My Bitcoin wallet id is: 3QJmV3qfvL9SuYo34YihAf3sRCW3qSinyC',
	str2 = '3QJmV3qfvL9SuYo34YihAf3sRCW3qSinyC'

// Pattern search without the strict config
console.log( pregx.getBtc(str1) ) // output: ['3QJmV3qfvL9SuYo34YihAf3sRCW3qSinyC']
console.log( pregx.getBtc(str2) ) // output: ['3QJmV3qfvL9SuYo34YihAf3sRCW3qSinyC']

// Now check what happens when the strict config is set to true
console.log( pregx.getBtc(str1, { strict: true }) ) // output: null
console.log( pregx.getBtc(str2, { strict: true }) ) // output: ['3QJmV3qfvL9SuYo34YihAf3sRCW3qSinyC']

*/