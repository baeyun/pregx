/*
 * Pattern for matching hex colors
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser(
		str,
		'#([0-9a-f]{3,6})',
		config || null
	)
