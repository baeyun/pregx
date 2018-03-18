/*
 * Pattern for emails
 *
 * This email regex is not fully RFC5322-compliant, but it
 * will validate most common email address formats correctly.
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser(
		str,
		'[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}',
		config || null
	)
