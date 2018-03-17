/*
 * Pattern for (North American) phone numbers
 *
 * This regex will validate a 10-digit North American
 * telephone number. Separators are not required, but
 * can include spaces, hyphens, or periods.
 * Parentheses around the area code are also optional.
 *
 * @credit Nerds, Rescue Me! <https://github.com/nerdsrescueme>
 */
export default (str, config) => {
	let pattern = '(([0-9]{1})*[- .(]*([0-9]{3})[- .)]*[0-9]{3}[- .]*[0-9]{4})+',
		flags = config && config.flags ? config.flags.join('') : ''

	// For a restricted match
	pattern = config && config.strict === true ? `^${pattern}$` : pattern

	return str.match( new RegExp(pattern, flags) )
}
