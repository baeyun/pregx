/*
 * Pattern for matching UUID / GUID
 *
 * Matches Universally Unique IDentifiers as
 * specified in RFC4122 bearing versions 1 - 5.
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser(
		str,
		'[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}',
		config || null
	)
