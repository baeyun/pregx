/*
 * Pattern for URLs
 *
 * This URL regex will validate most common URL formats correctly.
 *
 * @credit Nerds, Rescue Me! <https://github.com/nerdsrescueme>
 */
export default (str, config) => {
	let pattern = '((http|https|ftp)://)?([[a-zA-Z0-9]\-\.])+(\.)([[a-zA-Z0-9]]){2,4}([[a-zA-Z0-9]/+=%&_\.~?\-]*)',
		flags = config && config.flags ? config.flags.join('') : ''

	// For a restricted match
	pattern = config && config.strict === true ? `^${pattern}$` : pattern

	return str.match( new RegExp(pattern, flags) )
}
