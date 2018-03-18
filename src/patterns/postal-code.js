/*
 * Pattern for postal codes
 *
 * Currently only supports Canadian postal codes.
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser(
		str,
		'[ABCEGHJKLMNPRSTVXY][0-9][A-Z] [0-9][A-Z][0-9]',
		config || null
	)
