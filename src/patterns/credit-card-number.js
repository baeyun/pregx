/*
 * Pattern to match credit card numbers
 *
 * Supports all major credit cards types:
 * 		- Visa (default)
 * 		- Mastercard
 * 		- American Express (AmEx)
 * 		- Discover
 *
 * For a Visa credit card to be valid, it
 * must start with a 4 and have a total
 * of 13 numeric characters or start
 * with a 4 and have a total of 16
 * numeric characters.
 *
 * For an American Express (AmEx) credit
 * card to be valid, it must start 34
 * or 37 and have 15 total digits.
 *
 * For a Mastercard credit card to be valid,
 * it must start with any valid number between
 * 51 and 55 and have a total of
 * 16 digits.
 *
 * @todo add support for card numbers split
 * 		 by spaces or dashes.
 */

import regexParser from '../regex-parser'

export default (str, config) => {
	let pattern = '(?:4[0-9]{12}(?:[0-9]{3})?)'
	
	if (config && config.cardType)
		switch(config.cardType) {
			case 'mastercard':
				pattern = '(?:5[1-5][0-9]{14})'
				break

			case 'americanexpress':
			case 'amex':
				pattern = '(?:3[47][0-9]{13})'
				break
			
			case 'discover':
				pattern = '(?:6(?:011|5[0-9][0-9])[0-9]{12})'
				break
		}


	return regexParser( str, pattern, config || null )
}
