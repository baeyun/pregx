/*
 * Pattern for password
 *
 * Test for a strong password with this regex. The password
 * must contain one lowercase letter, one uppercase letter,
 * one number, and be at least 6 characters long.
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser(
		str,
		'(?=^.{6,}$)((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.*',
		config || null
	)
