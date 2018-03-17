/*
 * Pattern for matching International Bank Account Numbers (IBAN)
 *
 * @credit Hitham S. AlQadheeb <https://stackoverflow.com/users/643500/hitham-s-alqadheeb>
 */
export default (str, config) => {
	let pattern = '[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}',
		flags = config && config.flags ? config.flags.join('') : ''

	// For a restricted match
	pattern = config && config.strict === true ? `^${pattern}$` : pattern

	return str.match( new RegExp(pattern, flags) )
}
