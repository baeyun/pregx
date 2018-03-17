/*
 * Pattern for matching hex colors
 *
 * Info:
 *
 * /^#([0-9a-f]{3}|[0-9a-f]{6})$/i
 * matches #abc and #abcdef but not #abcd
 * 
 * /^#([0-9a-f]{3}){1,2}$/i
 * matches #abc and #abcdef but not #abcd
 * 
 * /^#(?:[0-9a-f]{3}){1,2}$/i
 * matches #abc and #abcdef but not #abcd
 *
 * @credit https://stackoverflow.com/users/515124/rodneyrehm
 */
export default (str, config) => {
	let pattern = '#([0-9a-f]{3}|[0-9a-f]{6})',
		flags = config && config.flags ? config.flags.join('') : ''

	// For a restricted match
	pattern = config && config.strict === true ? `^${pattern}$` : pattern

	return str.match( new RegExp(pattern, flags) )
}
