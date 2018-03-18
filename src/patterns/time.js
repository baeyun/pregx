/*
 * Pattern for matching time (HH:MM)
 *
 * @todo
 *		24H, seconds are optional
 * 		([0-1]?[0-9]|[2][0-3]):([0-5][0-9])(:[0-5][0-9])?
 * 		@credit https://stackoverflow.com/users/1779016/bahman-khalafi
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser(
		str,
		'([0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]',
		config || null
	)
