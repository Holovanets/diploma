module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['.'],
					alias: {
						'*': './app/',
						'@/assets': './app/assets',
						'@/components': './app/components',
						'@/constants': './app/constants',
						'@/hooks': './app/hooks',
						'@/modules': './app/modules',
						'@/navigation': './app/navigation',
						'@/providers': './app/providers',
						'@/regex': './app/regex',
						'@/screens': './app/screens',
						'@/types': './app/types',
						'@/reducers': './app/reducers',
						'@/actions': './app/actions',
						'@/services': './app/services',
						'@/utils': './app/utils'
					}
				}
			],
			['nativewind/babel'],
			['react-native-reanimated/plugin']
		]
	}
}
