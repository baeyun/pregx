/*
 * Pattern for matching ISBN (10 / 13)
 *
 * Supports ISBN-13 as the default format.
 */

import regexParser from '../regex-parser'

export default (str, config) => {
	let pattern = config && config.format === 'ISBN-10'
				  ? '(?:ISBN(?:-10)?:?\ )?(?=[0-9X]{10}$|(?=(?:[0-9]+[-\ ]){3})[-\ 0-9X]{13}$)[0-9]{1,5}[-\ ]?[0-9]+[-\ ]?[0-9]+[-\ ]?[0-9X]'
				  : '(?:ISBN(?:-13)?:?\ )?(?=[0-9]{13}$|(?=(?:[0-9]+[-\ ]){4})[-\ 0-9]{17}$)97[89][-\ ]?[0-9]{1,5}[-\ ]?[0-9]+[-\ ]?[0-9]+[-\ ]?[0-9]'

	return regexParser(
		str, 
		pattern,
		config || null
	)
}
