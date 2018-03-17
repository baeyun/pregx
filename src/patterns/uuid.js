/*
 * Pattern for matching UUID / GUID
 *
 * Matches Universally Unique IDentifiers as
 * specified in RFC4122 bearing versions 1 - 5.
 *
 * @credit Gambol <https://stackoverflow.com/users/1867535/gambol>
 */
export default (str, config) => {
	// @todo cater for case-insensitive matches
	let pattern = '[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}',
		flags = config && config.flags ? config.flags.join('') : ''

	// For a restricted match
	pattern = config && config.strict === true ? `^${pattern}$` : pattern

	return str.match( new RegExp(pattern, flags) )
}
