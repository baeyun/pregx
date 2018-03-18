/*
 * Pattern for matching US-based Social Security numbers
 *
 * @docs
 *
 * Matches:
 *		444-55-3333
 *		555335555
 *
 * Non-matches:
 * 		555---60--4444
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser(
		str,
		'\d{3}-\d{2}-\d{4}',
		config || null
	)
