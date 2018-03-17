/*
 * Pattern for matching HTML Tags
 */
export default (str, config) => {
	let pattern = '<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)',
		flags = config && config.flags ? config.flags.join('') : ''

	// For a restricted match
	pattern = config && config.strict === true ? `^${pattern}$` : pattern

	return str.match( new RegExp(pattern, flags) )
}
