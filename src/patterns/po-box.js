/*
 * Pattern for matching PO Box addresses
 *
 * Matches 'POB ...', 'PO Box ...'and 'Post Office Box ...'
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser(
		str,
		'\\b[PO.|Post\\sOffice]*\\s?B(ox)?.*\\d+\\b',
		config || null
	)
