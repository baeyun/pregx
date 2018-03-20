/*
 * Pattern for matching IPv4
 *
 * @todo revaluate, matches both v4 & v6
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser(
		str,
		'((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])',
		config || null
	)
