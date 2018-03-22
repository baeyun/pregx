/*
 * Pattern for matching price
 */

import regexParser from '../regex-parser'

export default (str, config) => {
	let pattern = (config && !config.matchCurrency)
		? '(\\d+[,\\.\\s]+\\d+)\\b'
		: '([\\$\\xA2-\\xA5\\u058F\\u060B\\u09F2\\u09F3\\u09FB\\u0AF1\\u0BF9\\u0E3F\\u17DB\\u20A0-\\u20BD\\uA838\\uFDFC\\uFE69\\uFF04\\uFFE0\\uFFE1\\uFFE5\\uFFE6]?\\s?\\d+[,\\.\\s]+\\d+)\\b'

	return regexParser( str, pattern, config || null ) || false
}
