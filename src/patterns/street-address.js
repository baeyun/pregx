/*
 * Pattern for matching street addresses
 *
 * @credit FrostedSyntax <https://www.codeproject.com/script/Membership/View.aspx?mid=8369714>
 */
export default (str, config) => {
	let pattern = '\d+[ ](?:[A-Za-z0-9.-]+[ ]?)+(?:Avenue|Lane|Road|Boulevard|Drive|Street|Ave|Dr|Rd|Blvd|Ln|St)\.?',
		flags = config && config.flags ? config.flags.join('') : ''

	// For a restricted match
	pattern = config && config.strict === true ? `^${pattern}$` : pattern

	return str.match( new RegExp(pattern, flags) )
}
