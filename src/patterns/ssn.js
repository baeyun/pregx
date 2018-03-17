/*
 * Pattern for matching US-based Social Security numbers
 *
 * @docs
 *
 * Matches:
 *		444-55-3333
 *		555335555
 *
 * Non-matches:
 * 		555---60--4444
 *
 * @credit JavaScript Cookbook by Shelley Powers <http://shop.oreilly.com/>
 */
export default (str, config) => {
	let pattern = '\d{3}-\d{2}-\d{4}',
		flags = config && config.flags ? config.flags.join('') : ''

	// For a restricted match
	pattern = config && config.strict === true ? `^${pattern}$` : pattern

	return str.match( new RegExp(pattern, flags) )
}
