/*
 * Pattern for matching PO Box addresses
 *
 * @doc
 *
 * Matches:
 * 		"#123", 
 * 		"Box 123", 
 * 		"Box-122", 
 * 		"Box122", 
 * 		"HC73 P.O. Box 217", 
 * 		"P O Box125", 
 * 		"P. O. Box", 
 * 		"P.O 123", 
 * 		"P.O. Box 123", 
 * 		"P.O. Box", 
 * 		"P.O.B 123",
 * 		"P.O.B. 123", 
 * 		"P.O.B.", 
 * 		"P0 Box", 
 * 		"PO 123", 
 * 		"PO Box N", 
 * 		"PO Box", 
 * 		"PO-Box", 
 * 		"POB 123", 
 * 		"POB", 
 * 		"POBOX123",
 * 		"Po Box", 
 * 		"Post 123", 
 * 		"Post Box 123", 
 * 		"Post Office Box 123", 
 * 		"Post Office Box", 
 * 		"box #123", 
 * 		"box 122", 
 * 		"box 123", 
 * 		"number 123", 
 * 		"p box", 
 * 		"p-o box", 
 * 		"p-o-box", 
 * 		"p.o box", 
 * 		"p.o. box", 
 * 		"p.o.-box", 
 * 		"p.o.b. #123", 
 * 		"p.o.b.", 
 * 		"p/o box", 
 * 		"po #123", 
 * 		"po box 123", 
 * 		"po box", 
 * 		"po num123", 
 * 		"po-box", 
 * 		"pobox", 
 * 		"pobox123", 
 * 		"post office box"
 *
 * @credit Dathan <https://stackoverflow.com/users/871297/dathan>
 */
export default (str, config) => {
	let pattern = '*((#\d+)|((box|bin)[-. \/\\]?\d+)|(.*p[ \.]? ?(o|0)[-. \/\\]? *-?((box|bin)|b|(#|num)?\d+))|(p(ost)? *(o(ff(ice)?)?)? *((box|bin)|b)? *\d+)|(p *-?\/?(o)? *-?box)|post office box|((box|bin)|b) *(number|num|#)? *\d+|(num|number|#) *\d+)',
		flags = config && config.flags ? config.flags.join('') : ''

	// For a restricted match
	pattern = config && config.strict === true ? `^${pattern}$` : pattern

	return str.match( new RegExp(pattern, flags) )
}
