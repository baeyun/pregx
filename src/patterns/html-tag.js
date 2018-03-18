/*
 * Pattern for matching HTML Tags
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser(
		str,
		'<([a-z]+)([^<]+)*(?:>(.*)<\/\\1>|\s+\/>)',
		config || null
	)
