/*
 * Pattern for matching price
 *
 * USAGE:
 *
 * International format for the en_US locale & US national format:
 * 		134.56
 * 		1,234.56
 * 		2,991,234.00
 *
 * Italian national format with 2 decimals:
 * 		134,56
 * 		21.234,56
 * 		1.234,56
 * 		9.321.234,56
 *
 * International format for the de_DE locale:
 * 		134,56
 * 		1234,56
 * 		98281234,56
 *
 * Decimals are optional, validation for whole amounts:
 * 		1234
 * 		1,234
 * 		2,991,234
 * 		1.234
 * 		9.321.234
 *
 * @credit https://stackoverflow.com/users/731947/cs%E1%B5%A0
 */
export default (str, config) => {
	let pattern = '(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?',
		flags = config && config.flags ? config.flags.join('') : ''

	// For a restricted match
	pattern = config && config.strict === true ? `^${pattern}$` : pattern

	return str.match( new RegExp(pattern, flags) )
}
