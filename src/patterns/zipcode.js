/*
 * Pattern for ZIP Codes
 *
 * That pattern matches five primary digits and
 * allows the option of having a hyphen and four
 * extended digits. This matches all zip codes,
 * however it is possible for there to be a match
 * of five digits that is not a zip code. Adding
 * to our pattern will fix that.
 *
 * @credit FrostedSyntax <https://www.codeproject.com/script/Membership/View.aspx?mid=8369714>
 */
export default (str, config) => {
	let pattern = '\b\d{5}(?:-\d{4})?\b',
		flags = config && config.flags ? config.flags.join('') : ''

	// For a restricted match
	pattern = config && config.strict === true ? `^${pattern}$` : pattern

	return str.match( new RegExp(pattern, flags) )
}
