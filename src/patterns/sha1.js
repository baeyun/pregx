/*
 * Pattern for matching SHA1 hashes
 */
export default (str, config) => {
	let pattern = '\b[A-Fa-f0-9]{7,40}\b',
		flags = config && config.flags ? config.flags.join('') : ''

	// For a restricted match
	pattern = config && config.strict === true ? `^${pattern}$` : pattern

	return str.match( new RegExp(pattern, flags) )
}
