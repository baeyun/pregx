/*
 * Pattern for matching ISBN (10 / 13)
 *
 * Supports ISBN-13 as default the default format.
 * 
 * @credit Regular Expressions Cookbook, 2nd Edition by Steven Levithan, Jan Goyvaerts <http://shop.oreilly.com/>
 */
export default (str, config) => {
	let pattern = config && config.format === 'ISBN-10'
				  ? '(?:ISBN(?:-10)?:?\ )?(?=[0-9X]{10}$|(?=(?:[0-9]+[-\ ]){3})[-\ 0-9X]{13}$)[0-9]{1,5}[-\ ]?[0-9]+[-\ ]?[0-9]+[-\ ]?[0-9X]'
				  : '(?:ISBN(?:-13)?:?\ )?(?=[0-9]{13}$|(?=(?:[0-9]+[-\ ]){4})[-\ 0-9]{17}$)97[89][-\ ]?[0-9]{1,5}[-\ ]?[0-9]+[-\ ]?[0-9]+[-\ ]?[0-9]',
		flags = config && config.flags ? config.flags.join('') : ''

	// For a restricted match
	pattern = config && config.strict === true ? `^${pattern}$` : pattern

	return str.match( new RegExp(pattern, flags) )
}

