/*
 * Pattern for matching Bitcoin address
 *
 * Matches a string that starts with either 1 or 3 and,
 * after that, contains 26 to 33 characters of either a-z,
 * A-Z, 0-9, excluding O, I and l (not valid characters in
 * a Bitcoin address)
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser( str, '[13][a-km-zA-HJ-NP-Z1-9]{25,34}', config || null )
