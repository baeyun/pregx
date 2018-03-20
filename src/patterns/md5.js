/*
 * Pattern for matching MD5 hashes
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser( str, '\\b[A-Fa-f0-9]{32}\\b', config || null )
