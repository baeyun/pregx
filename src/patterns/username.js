/*
 * Pattern for matching standard usernames
 */
export default (str, config) => {
	let pattern = '[a-z0-9_]',
		flags = config && config.flags ? config.flags.join('') : ''

	// For a restricted match
	pattern = config && config.strict === true ? `^${pattern}$` : pattern

	return str.match( new RegExp(pattern, flags) )
}
