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
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser(
		str,
		'(\d*([.,](?=\d{3}))?\d+)+((?!\\2)[.,]\d\d)?',
		config || null
	)
