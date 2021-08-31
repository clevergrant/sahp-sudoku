module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'import',
	],
	extends: [
		'plugin:react/recommended',
		'plugin:import/typescript',
		'plugin:import/errors',
		'plugin:import/warnings',
	],
	settings: {
		'import/resolver': 'webpack',
	},
	rules: {
		semi: [ 1, 'never' ],
		indent: [ 1, 'tab' ],
		quotes: [ 1, 'single' ],
		'quote-props': [ 1, 'as-needed' ],
		'comma-dangle': [ 'warn', 'always-multiline' ],
		'array-bracket-spacing': [ 1, 'always' ],
		'comma-spacing': 1,
	},
}