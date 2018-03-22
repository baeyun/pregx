/*
 * Pattern for matching time (HH:MM:SS PM/AM)
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser(
		str,
		'([0[0-9]|1[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?(\\s?[PA]M)?',
		config || null
	)
