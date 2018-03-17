/*
 * Pattern for matching time (HH:MM)
 *
 * @credit https://stackoverflow.com/users/685410/sergo
 */
export default (str, config) => {
	// @todo check:
	// 		24H, seconds are optional
	// 		([0-1]?[0-9]|[2][0-3]):([0-5][0-9])(:[0-5][0-9])?
	// 		@credit https://stackoverflow.com/users/1779016/bahman-khalafi
	let pattern = '([0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]',
		flags = config && config.flags ? config.flags.join('') : ''

	// For a restricted match
	pattern = config && config.strict === true ? `^${pattern}$` : pattern

	return str.match( new RegExp(pattern, flags) )
}
