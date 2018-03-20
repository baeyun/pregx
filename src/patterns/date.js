/*
 * Pattern for Date
 *
 * Optional separators are spaces, hyphens,
 * forward slashes, and periods.
 */

import regexParser from '../regex-parser'

export default (str, config) => {
	let DD = '(0?[1-9]|[12][0-9]|3[01])',
		MM = '(0?[1-9]|1[012])',
		YYYY = '\\d{4}',
		separators = '[\\/\\-\\.]',
		pattern = [DD, MM, YYYY] // default format

	if (config && config.format)
		switch(config.format) {
			case 'MM/DD/YYYY':
			case 'MM-DD-YYYY':
			case 'MM.DD.YYYY':
				pattern = [MM, DD, YYYY]
				break

			case 'YYYY/MM/DD':
			case 'YYYY-MM-DD':
			case 'YYYY.MM.DD':
				pattern = [YYYY, MM, DD]
				break
		}

	// Capture only if preceded by non-word character
	pattern = `\\b${pattern.join(separators)}\\b`

	return regexParser( str, pattern, config || null )
}
