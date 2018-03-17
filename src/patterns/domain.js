/*
 * Pattern for matching domain names
 */
export default (str, config) => {
	let pattern = '([a-z][a-z0-9-]+(\.|-*\.))+[a-z]{2,6}',
		flags = config && config.flags ? config.flags.join('') : ''

	// For a restricted match
	pattern = config && config.strict === true ? `^${pattern}$` : pattern

	return str.match( new RegExp(pattern, flags) )
}
