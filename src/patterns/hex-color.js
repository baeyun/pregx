/*
 * Pattern for matching hex colors
 *
 * Info:
 *
 * /^#([0-9a-f]{3}|[0-9a-f]{6})$/i
 * matches #abc and #abcdef but not #abcd
 * 
 * /^#([0-9a-f]{3}){1,2}$/i
 * matches #abc and #abcdef but not #abcd
 * 
 * /^#(?:[0-9a-f]{3}){1,2}$/i
 * matches #abc and #abcdef but not #abcd
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser(
		str,
		'#([0-9a-f]{3}|[0-9a-f]{6})',
		config || null
	)
