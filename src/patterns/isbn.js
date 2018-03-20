/*
 * Pattern for matching ISBN (10 / 13)
 *
 * Supports ISBN-13 as the default format.
 */

import regexParser from '../regex-parser'

export default (str, config) => {
	let pattern = config && config.format === 'ISBN-10'
				  ? '(?:ISBN(?:-10)?:?\\s)?(?=[0-9X]{10}$|(?=(?:[0-9]+[-\\s]){3})[-\\s0-9X]{13}$)[0-9]{1,5}[-\\s]?[0-9]+[-\\s]?[0-9]+[-\\s]?[0-9X]'
				  : '(?:ISBN(?:-13)?:?\\s)?(?=[0-9]{13}$|(?=(?:[0-9]+[-\\s]){4})[-\\s0-9]{17}$)97[89][-\\s]?[0-9]{1,5}[-\\s]?[0-9]+[-\\s]?[0-9]+[-\\s]?[0-9]'

	// Capture only if preceded by non-word character
	pattern = `\\b${pattern}\\b`

	return regexParser(
		str, 
		pattern,
		config || null
	)
}
