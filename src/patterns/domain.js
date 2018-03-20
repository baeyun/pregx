/*
 * Pattern for matching domain names
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser(
		str,
		'([a-z][a-z0-9-]+(\\.|-*\\.))+[a-z]{2,6}',
		config || null
	)
