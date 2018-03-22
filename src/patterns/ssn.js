/*
 * Pattern for matching US-based Social Security numbers
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser(
		str,
		'\\d{3}-\\d{2}-\\d{4}',
		config || null
	)
