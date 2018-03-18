/*
 * Pattern for matching MAC addresses (IEEE 802)
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser(
		str,
		'([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})',
		config || null
	)
