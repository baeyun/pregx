/*
 * Pattern for postal codes
 *
 * Currently only supports Canadian postal codes.
 *
 * @credit Nerds, Rescue Me! <https://github.com/nerdsrescueme>
 */
export default (str, config) => {
	let pattern = '[ABCEGHJKLMNPRSTVXY][0-9][A-Z] [0-9][A-Z][0-9]',
		flags = config && config.flags ? config.flags.join('') : ''

	// For a restricted match
	pattern = config && config.strict === true ? `^${pattern}$` : pattern

	return str.match( new RegExp(pattern, flags) )
}
