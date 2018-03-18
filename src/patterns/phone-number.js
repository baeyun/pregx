/*
 * Pattern for (North American) phone numbers
 *
 * This regex will validate a 10-digit North American
 * telephone number. Separators are not required, but
 * can include spaces, hyphens, or periods.
 * Parentheses around the area code are also optional.
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser(
		str,
		'(([0-9]{1})*[- .(]*([0-9]{3})[- .)]*[0-9]{3}[- .]*[0-9]{4})+',
		config || null
	)
