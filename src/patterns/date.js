/*
 * Pattern for Date (MM/DD/YYYY)
 *
 * Optional separators are spaces, hyphens, forward slashes,
 * and periods. The year is limited between 1900 and 2099.
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser(
		str,
		'(0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2}',
		config || null
	)
