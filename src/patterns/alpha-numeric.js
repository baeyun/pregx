/*
 * Pattern for alpha-numeric characters
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser( str, '[a-zA-Z0-9]+', config || null )
