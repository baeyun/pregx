import * as pregx from './src/pregx'

console.log(
	pregx.getAlphabet(
		'Hello, World!',
		{
			strict: false,
			global: true,
			ignoreCase: true,
			exclude: ['l', 'o']
		}
	)
)
