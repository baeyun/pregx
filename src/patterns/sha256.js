/*
 * Pattern for matching SHA256 hashes
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser(
		str,
		'\\b[A-Fa-f0-9]{64}\\b',
		config || null
	)
