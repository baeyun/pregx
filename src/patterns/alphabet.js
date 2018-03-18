/*
 * Pattern for alphabetic characters
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser( str, '[a-zA-Z]+', config || null )
