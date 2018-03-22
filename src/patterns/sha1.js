/*
 * Pattern for matching SHA1 hashes
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser(
		str,
		'\\b[A-Fa-f0-9]{7,40}\\b',
		config || null
	)
