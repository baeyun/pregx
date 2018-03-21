# API &amp; USE-CASE EXAMPLES

## getPostalCode()
> Supports all global postal codes.
That pattern by default matches five primary digits and allows the option of having a hyphen and four extended digits. This matches all postal codes, however it is possible for there to be a match of five digits that is not a zip code.
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

## getPOBox()
Matches 'POB ...', 'PO Box ...'and 'Post Office Box ...'
```javascript
let str = `
Mail us at: PO Box 47369
Mail us at: POB 47369
Mail us at: Post Office Box 47369
`

console.log( getPOBox(str) ) // matches: ["PO Box 47369", "POB 47369", "Post Office Box 47369"]
```

## getPhoneNumber()
This patter will match 10-digit North American telephone number. Separators are not required, but can include spaces, hyphens, or periods. Parentheses around the area code are also optional.
```javascript
let str = `
My phone no. with no seperation: 0768758682
My phone no. with spaces:        076 875 8682
My phone no. with dashes:        076-875-8682
`
console.log( getPhoneNumber(str) ) // matches: ["0768758682", "076 875 8682", "076-875-8682"]
```

## getPassword()
```javascript
// Example seems redundant
```

## getMD5()
```javascript
let str = 'My encrypted hash: 00236a2ae558018ed13b5222ef1bd987'

console.log( getMD5(str) ) // matches: ["00236a2ae558018ed13b5222ef1bd987"]
```

## getMAC()
```javascript
let str = 'Network Adapter MAC Address: 00:1B:44:11:3A:B7'

console.log( getMAC(str) ) // matches: ["00:1B:44:11:3A:B7"]
```

## getISBN()
```javascript
let str1 = 'My book\'s International Standard Book Number: 978-1-4028-9462-6', // ISBN-13
	str2 = 'My book\'s International Standard Book Number: 0-545-01022-5' // ISBN-10

// Supports ISBN-13 as the default format
console.log( getISBN(str1) ) // matches: ["978-1-4028-9462-6"]
console.log( getISBN(str2, { format: 'ISBN-10' }) ) // matches: ["0-545-01022-5"]
```

## getIP() / getIPv4() / getIPv6()
```javascript
let str = `
My IP address:   192.168.102.100
My IPv4 address: 216.3.128.12
My IPv6 address: 2001:0db8:85a3:0000:0000:8a2e:0370:7334
`

console.log( getIP(str) ) // matches: ["192.168.102.100", "216.3.128.12"]
console.log( getIPv4(str) ) // matches: ["192.168.102.100", "216.3.128.12"]
console.log( getIPv6(str) ) // matches: ["2001:0db8:85a3:0000:0000:8a2e:0370:7334"]
```

## getIBAN()
```javascript
let str = 'My German IBAN: DE89370400440532013000'

console.log( getIBAN(str) ) // matches: ["DE89370400440532013000"]
```

## getHTMLTag()
```javascript
let str = `
Malicious HTML <strong>tags</strong> could be identified
with <i>PregX</i>\'s <code>getHTMLTag()</code> function.
`

console.log( getHTMLTag(str) )
// matches: [
// 	"<strong>tags</strong>",
// 	"<i>PregX</i>",
// 	"<code>getHTMLTag()</code>"
// ]
```

## getHexColor()
Matches between 3 - 6 characters after the `#`.

```javascript
let str = 'My favorite color: #ffa500 (orange)'

console.log( getHexColor(str) ) // matches: ["#ffa500"]
```

## getGitRepo()
Matches all the following cases:
- `ssh://user@host.xz:port/path/to/repo.git/`
- `ssh://user@host.xz/path/to/repo.git/`
- `ssh://host.xz:port/path/to/repo.git/`
- `ssh://host.xz/path/to/repo.git/`
- `ssh://user@host.xz/path/to/repo.git/`
- `ssh://host.xz/path/to/repo.git/`
- `ssh://user@host.xz/~user/path/to/repo.git/`
- `ssh://host.xz/~user/path/to/repo.git/`
- `ssh://user@host.xz/~/path/to/repo.git`
- `ssh://host.xz/~/path/to/repo.git`
- `user@host.xz:/path/to/repo.git/`
- `host.xz:/path/to/repo.git/`
- `user@host.xz:~user/path/to/repo.git/`
- `host.xz:~user/path/to/repo.git/`
- `user@host.xz:path/to/repo.git`
- `host.xz:path/to/repo.git`
- `rsync://host.xz/path/to/repo.git/`
- `git://host.xz/path/to/repo.git/`
- `git://host.xz/~user/path/to/repo.git/`
- `http://host.xz/path/to/repo.git/`
- `https://host.xz/path/to/repo.git/`
- `/path/to/repo.git/`
- `path/to/repo.git/`
- `~/path/to/repo.git`
- `file:///path/to/repo.git/`
- `file://~/path/to/repo.git/`
```javascript
let str = 'https://github.com/bukharim96/pregx.git'

console.log( getGitRepo(str) ) // matches: ["https://github.com/bukharim96/pregx.git"]
```

## getEmail()
```javascript
let str = 'My email address: johndoe@foo.com'

console.log( getEmail(str) ) // matches: ["johndoe@foo.com"]
```

## getDomain()
**NB:** This only matches the domain name and not the protocol.
```javascript
let str = 'My site\'s link is http://ninjasinpajamas.com'

console.log( getDomain(str) ) // matches: ["ninjasinpajamas.com"]
```

## getDigits()
```javascript
let str = 'A string filled with 5 digits: 1, 22, 333, 4444, 55555.'

console.log( getDigits(str) ) // matches: ["5", "1", "22", "333", "4444", "55555"]
```

## getDate()
Optional separators are hyphens, forward slashes, and periods. The default format is `DD/MM/YYYY`.
```javascript
let str = `
Today's date:     31/03/2018
Yesterday's date: 2018-03-20
My Birthday:      06.27.1992
`
// DD/MM/YYYY
console.log( getDate(str) ) // matches: ["31/03/2018"]

// MM/DD/YYYY
console.log( getDate(str, { format: 'MM/DD/YYYY' }) )
// matches: ["06.27.1992"]

// YYYY/MM/DD
console.log( getDate(str, { format: 'YYYY/MM/DD' }) )
// matches: ["2018-03-20"]
```

## getCreditCardNumber()
Supports all major credit cards types:
- American Express (Amex)
- Discover
- Mastercard
- Visa

**NB:** This function matches Visa card numbers by default.
```javascript
let str = `
My Visa card number: 			 4111111111111111
My MasterCard card number: 		 5500000000000004
My American Express card number: 370000000000009
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

## getBTC()
Matches a string that starts with either **1** or **3** followed by a set of **26** to **33** characters of of the variation: **a-z**; **A-Z**; and **0-9**, excluding invalid Bitcoin address characters such as: **O**; **I**; and **l**.
```javascript
let str = 'My Bitcoin wallet id is: 3QJmV3qfvL9SuYo34YihAf3sRCW3qSinyC'

console.log( getBTC(str) )
// matches: ['3QJmV3qfvL9SuYo34YihAf3sRCW3qSinyC']
```

## getAlphabet()
```javascript
let str = 'The English Alphabet consists of 26 letters'

console.log( getAlphabet(str) )
// matches: ["The", "English", "Alphabet", "consists", "of", "letters"]
```

## getAlphaNumeric()
```javascript
let str = 'Some text & numbers > 10 like: 11, 12, 13, 14, 15'

// All get[pattern]() functions by default match all
// text that meet the criteria of the pattern.

console.log( getAlphaNumeric(str) )
// matches: ["Some", "text", "numbers", "10", "like", "11", "12", "13", "14", "15"]

console.log( getAlphaNumeric(str, { matchAll: false }) )
// matches: ["Some"]
```
