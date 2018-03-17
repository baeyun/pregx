/*
 * Pattern for digits (whole numbers)
 *
 * @credit Nerds, Rescue Me! <https://github.com/nerdsrescueme>
 */
export default (str, config) => {
	let pattern = '[0-9]+',
		flags = config && config.flags ? config.flags.join('') : ''

	// For a restricted match
	pattern = config && config.strict === true ? `^${pattern}$` : pattern

	return str.match( new RegExp(pattern, flags) )
}
