/*
 * Pattern to match credit card numbers
 *
 * Supports all major credit cards:
 * 		- American Express (Amex)
 * 		- Discover
 * 		- Mastercard
 * 		- Visa
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser(
		str,
		'(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6011[0-9]{12}|3(?:0[0-5]|[68][0-9])[0-9]{11}|3[47][0-9]{13})',
		config || null
	)
