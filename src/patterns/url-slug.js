/*
 * Pattern for matching URL slugs
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser( str, '[a-z0-9-]+', config || null )
