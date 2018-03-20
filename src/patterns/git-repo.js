/*
 * Pattern for matching GitHub Repository URLs
 *
 * @docs
 * Cases:
 * 		ssh://user@host.xz:port/path/to/repo.git/
 * 		ssh://user@host.xz/path/to/repo.git/
 * 		ssh://host.xz:port/path/to/repo.git/
 * 		ssh://host.xz/path/to/repo.git/
 * 		ssh://user@host.xz/path/to/repo.git/
 * 		ssh://host.xz/path/to/repo.git/
 * 		ssh://user@host.xz/~user/path/to/repo.git/
 * 		ssh://host.xz/~user/path/to/repo.git/
 * 		ssh://user@host.xz/~/path/to/repo.git
 * 		ssh://host.xz/~/path/to/repo.git
 * 		user@host.xz:/path/to/repo.git/
 * 		host.xz:/path/to/repo.git/
 * 		user@host.xz:~user/path/to/repo.git/
 * 		host.xz:~user/path/to/repo.git/
 * 		user@host.xz:path/to/repo.git
 * 		host.xz:path/to/repo.git
 * 		rsync://host.xz/path/to/repo.git/
 * 		git://host.xz/path/to/repo.git/
 * 		git://host.xz/~user/path/to/repo.git/
 * 		http://host.xz/path/to/repo.git/
 * 		https://host.xz/path/to/repo.git/
 * 		/path/to/repo.git/
 * 		path/to/repo.git/
 * 		~/path/to/repo.git
 * 		file:///path/to/repo.git/
 * 		file://~/path/to/repo.git/
 */

import regexParser from '../regex-parser'

export default (str, config) =>
	regexParser(
		str,
		'((git|ssh|http(s)?)|(git@[\\w\\.]+))(:(//)?)([\\w\\.@\\:/\\-~]+)(\\.git)(/)?',
		config || null
	)
