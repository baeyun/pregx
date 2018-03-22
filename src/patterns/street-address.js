/*
 * Pattern for matching street addresses
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser(
		str,
		'\\d+[ ](?:[A-Za-z0-9.-]+[ ]?)+(?:Avenue|Lane|Road|Boulevard|Drive|Street|Ave|Dr|Rd|Blvd|Ln|St)\\.?',
		config || null
	)
