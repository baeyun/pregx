/*
 * Pattern for matching standard usernames
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser( str, '[a-z0-9_]', config || null )
