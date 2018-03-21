/*
 * Pattern for postal codes
 *
 * Supports all global postal codes.
 *
 * That pattern by default matches five primary
 * digits and allows the option of having a hyphen
 * and four extended digits. This matches all postal
 * codes, however it is possible for there to be a
 * match of five digits that is not a zip code.
 */

import regexParser from '../regex-parser'

export default (str, config) => {
	let pattern = '\b\d{5}(?:-\d{4})?\b' // default

	if (config && config.format)
		switch(config.format) {
			case 'AD':
				pattern = '(?:AD)*(\\d{3})'
				break

			case 'AM':
			case 'BY':
			case 'CN':
			case 'IN':
			case 'KG':
			case 'KP':
			case 'KZ':
			case 'MN':
			case 'NG':
			case 'RO':
			case 'RS':
			case 'RU':
			case 'SG':
			case 'TJ':
			case 'TM':
			case 'UZ':
			case 'VN':
				pattern = '(\\d{6})'
				break

			case 'AR':
				pattern = '([A-Z]\\d{4}[A-Z]{3})'
				break

			case 'AT':
			case 'AU':
			case 'BD':
			case 'BE':
			case 'BG':
			case 'CH':
			case 'CR':
			case 'CV':
			case 'CX':
			case 'CY':
			case 'DK':
			case 'ET':
			case 'GE':
			case 'GL':
			case 'GW':
			case 'HU':
			case 'LI':
			case 'LR':
			case 'LU':
			case 'MK':
			case 'MZ':
			case 'NE':
			case 'NF':
			case 'NO':
			case 'NZ':
			case 'PH':
			case 'PY':
			case 'TN':
			case 'VE':
			case 'ZA':
				pattern = '(\\d{4})'
				break
			
			case 'AX':
			case 'FI':
				pattern = '(?:FI)*(\\d{5})'
				break

			case 'AZ':
				pattern = '(?:AZ)*(\\d{4})'
				break

			case 'BA':
			case 'CZ':
			case 'DE':
			case 'DO':
			case 'DZ':
			case 'EE':
			case 'EG':
			case 'ES':
			case 'FM':
			case 'FR':
			case 'GR':
			case 'GT':
			case 'ID':
			case 'IL':
			case 'IQ':
			case 'IT':
			case 'JO':
			case 'KE':
			case 'KH':
			case 'KW':
			case 'LA':
			case 'LK':
			case 'MA':
			case 'MC':
			case 'ME':
			case 'MM':
			case 'MQ':
			case 'MV':
			case 'MX':
			case 'MY':
			case 'NC':
			case 'NP':
			case 'PK':
			case 'PL':
			case 'SA':
			case 'SD':
			case 'SK':
			case 'SN':
			case 'TH':
			case 'TR':
			case 'TW':
			case 'UA':
			case 'UY':
			case 'VA':
			case 'YT':
			case 'ZM':
			case 'CS':
				pattern = '(\\d{5})'
				break

			case 'BB':
				pattern = '(?:BB)*(\\d{5})'
				break

			case 'BH':
				pattern = '(\\d{3}\\d?)'
				break

			case 'BM':
				pattern = '([A-Z]{2}\\d{2})'
				break

			case 'BN':
			case 'HN':
				pattern = '([A-Z]{2}\\d{4})'
				break

			case 'BR':
				pattern = '(\\d{8})'
				break

			case 'CA':
				pattern = '([ABCEGHJKLMNPRSTVXY]\\d[ABCEGHJKLMNPRSTVWXYZ]) ?(\\d[ABCEGHJKLMNPRSTVWXYZ]\\d)'
				break

			case 'CL':
			case 'JP':
			case 'NI':
			case 'PT':
				pattern = '(\\d{7})'
				break

			case 'CU':
				pattern = '(?:CP)*(\\d{5})'
				break

			case 'EC':
				pattern = '([a-zA-Z]\\d{4}[a-zA-Z])'
				break

			case 'FO':
				pattern = '(?:FO)*(\\d{3})'
				break

			case 'GB':
			case 'GG':
			case 'IM':
			case 'JE':
				pattern = '([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\\s?[0-9][A-Za-z]{2})'
				break

			case 'GF':
				pattern = '((97|98)3\\d{2})'
				break

			case 'GP':
				pattern = '((97|98)\\d{3})'
				break

			case 'GU':
				pattern = '(969\\d{2})'
				break

			case 'HR':
				pattern = '(?:HR)*(\\d{5})'
				break

			case 'HT':
				pattern = '(?:HT)*(\\d{4})'
				break

			case 'IR':
				pattern = '(\\d{10})'
				break

			case 'IS':
			case 'LS':
			case 'MG':
			case 'OM':
			case 'PG':
				pattern = '(\\d{3})'
				break

			case 'KR':
				pattern = '(?:SEOUL)*(\\d{6})'
				break

			case 'LB':
				pattern = '(\\d{4}(\\d{4})?)'
				break

			case 'LT':
				pattern = '(?:LT)*(\\d{5})'
				break

			case 'LV':
				pattern = '(?:LV)*(\\d{4})'
				break

			case 'MD':
				pattern = '(?:MD)*(\\d{4})'
				break

			case 'MT':
				pattern = '([A-Z]{3}\\s\\d{2}\\d?)'
				break

			case 'NL':
				pattern = '(\\d{4}[A-Z]{2})'
				break

			case 'PF':
				pattern = '((97|98)7\\d{2})'
				break

			case 'PM':
				pattern = '(97500)'
				break

			case 'PR':
				pattern = '(\\d{9})'
				break

			case 'PW':
				pattern = '(96940)'
				break

			case 'RE':
				pattern = '((97|98)(4|7|8)\\d{2})'
				break

			case 'SE':
				pattern = '(?:SE)*(\\d{5})'
				break

			case 'SH':
				pattern = '(STHL1ZZ)'
				break

			case 'SI':
				pattern = '(?:SI)*(\\d{4})'
				break

			case 'SM':
				pattern = '(4789\\d)'
				break

			case 'SO':
				pattern = '([A-Z]{2}\\d{5})'
				break

			case 'SV':
				pattern = '(?:CP)*(\\d{4})'
				break

			case 'SZ':
				pattern = '([A-Z]\\d{3})'
				break

			case 'TC':
				pattern = '(TKCA 1ZZ)'
				break

			case 'US':
			case 'VI':
				pattern = '\\d{5}(-\\d{4})?'
				break

			case 'WF':
				pattern = '(986\\d{2})'
				break
		}

	// Capture only if preceded by non-word character
	// pattern = `\\b${pattern}\\b`

	return regexParser( str, pattern, config || null )
}
