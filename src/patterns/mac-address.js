/*
 * Pattern for matching MAC addresses (IEEE 802)
 *
 * @credit netcoder <https://stackoverflow.com/users/492901/netcoder>
 */
export default (str, config) => {
	let pattern = '([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})',
		flags = config && config.flags ? config.flags.join('') : ''

	// For a restricted match
	pattern = config && config.strict === true ? `^${pattern}$` : pattern

	return str.match( new RegExp(pattern, flags) )
}
