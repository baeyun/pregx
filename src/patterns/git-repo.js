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
 *
 * @credit Kel Solaar <https://stackoverflow.com/users/931625/kel-solaar>
 */
export default (str, config) => {
	let pattern = '((git|ssh|http(s)?)|(git@[\w\.]+))(:(//)?)([\w\.@\:/\-~]+)(\.git)(/)?',
		flags = config && config.flags ? config.flags.join('') : ''

	// For a restricted match
	pattern = config && config.strict === true ? `^${pattern}$` : pattern

	return str.match( new RegExp(pattern, flags) )
}
