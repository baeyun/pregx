/*
 * Pattern for matching International Bank Account Numbers (IBAN)
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser(
		str,
		'[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}',
		config || null
	)
