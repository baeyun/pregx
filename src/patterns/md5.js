/*
 * Pattern for matching MD5 hashes
 *
 * @docs
 *
 * Matches:
 * 		00236a2ae558018ed13b5222ef1bd987
 */
export default (str, config) => {
	let pattern = '[A-Fa-f0-9]{32}',
		flags = config && config.flags && config.flags.indexOf('i') > -1 ? config.flags.join('') : ''

	// For a restricted match
	pattern = config && config.strict === true ? `^${pattern}$` : pattern

	return str.match( new RegExp(pattern, flags) )
}

// @todo cater for the below cases
// md5('00236a2ae558018ed13b5222ef1bd987', {flags: ['g', 'i']})
// md5('00236a2ae558018ed13b5222ef1bd987', {flags: ['g']})
