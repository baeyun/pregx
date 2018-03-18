/*
 * RegexParser
 *
 * @author bukharim96 <bukharim96@gmail.com>
 */

export default (str, pattern, config) => {
	if (!str && typeof str !== 'string')
		throw new TypeError('The first argument is not a string. Please provide a string value.')

	if (!pattern && typeof pattern !== 'string')
		throw new TypeError('The second argument is not a string. Please provide a string value.')

	let flags = []

	if (config && config.constructor == Object) {
		let { global, ignoreCase, multiLine, matchUnicode, stickyMatch, exclude, strict } = config

		strict = config.strict

		// For a restricted match
		if (strict === true)
			pattern = `^${pattern}$`

		// if (exclude)
		// 	pattern = `(?![${exclude.join('|')}])${pattern}`

		// Flags
		if (global === true)       flags.push('g')
		if (ignoreCase === true)   flags.push('i')
		if (multiLine === true)    flags.push('m')
		if (matchUnicode === true) flags.push('u')
		if (stickyMatch === true)  flags.push('y')
	}

	return str.match( new RegExp(pattern, flags.join('') || '') )
}
