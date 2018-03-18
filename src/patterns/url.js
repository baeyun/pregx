/*
 * Pattern for URLs
 *
 * This URL regex will validate most common URL formats correctly.
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser(
		str,
		'((http|https|ftp)://)?([[a-zA-Z0-9]\-\.])+(\.)([[a-zA-Z0-9]]){2,4}([[a-zA-Z0-9]/+=%&_\.~?\-]*)',
		config || null
	)
