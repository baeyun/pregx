/*
 * Pattern for digits (whole numbers)
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser( str, '[0-9]+', config || null )
