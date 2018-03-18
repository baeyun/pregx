/*
 * Pattern for matching MD5 hashes
 *
 * @docs
 *
 * Matches:
 * 		00236a2ae558018ed13b5222ef1bd987
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser( str, '[A-Fa-f0-9]{32}', config || null )
