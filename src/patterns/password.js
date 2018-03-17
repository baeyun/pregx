/*
 * Pattern for password
 *
 * Test for a strong password with this regex. The password
 * must contain one lowercase letter, one uppercase letter,
 * one number, and be at least 6 characters long.
 *
 * @credit Nerds, Rescue Me! <https://github.com/nerdsrescueme>
 */
export default (str, config) => {
	let pattern = '(?=^.{6,}$)((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.*',
		flags = config && config.flags ? config.flags.join('') : ''

	// For a restricted match
	pattern = config && config.strict === true ? `^${pattern}$` : pattern

	return str.match( new RegExp(pattern, flags) )
}
