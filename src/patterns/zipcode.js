/*
 * Pattern for ZIP Codes
 *
 * That pattern matches five primary digits and
 * allows the option of having a hyphen and four
 * extended digits. This matches all zip codes,
 * however it is possible for there to be a match
 * of five digits that is not a zip code. Adding
 * to our pattern will fix that.
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser(
		str,
		'\b\d{5}(?:-\d{4})?\b',
		config || null
	)
