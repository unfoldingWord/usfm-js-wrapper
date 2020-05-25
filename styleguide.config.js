const path = require('path');
const upperFirst = require('lodash/upperFirst');
const camelCase = require('lodash/camelCase');
const { name, version, repository } = require('./package.json');
const { styles, theme } = require('./styleguide.styles');

let sections = [
	{
		name: 'README',
		content: 'README.md',
	},
	// {
	// 	name: 'Word Count',
	// 	components: () => {
	// 		const componentNames = [
	// 			'word-count-basic',
	// 		];
	// 		return componentNames.map(componentName => {
	// 			const filename = upperFirst(camelCase(componentName));
	// 			return path.resolve(__dirname, `src/components/${componentName}`, `${filename}.js`)
	// 		});
	// 	}
	// },
	{
		name: 'Core functions',
		content: 'src/core/README.md',
		sections: [
			{
				name: 'toJSON()',
				content: 'src/core/toJSON.md',
				description: 'Javascript toJSON() function'
			},
			{
				name: 'toUSFM()',
				content: 'src/core/toUSFM.md',
				description: 'Javascript toUSFM() function'
			},
			{
				name: 'removeMarker()',
				content: 'src/core/removeMarker.md',
				description: 'Javascript removeMarker() function'
			},
			{
				name: 'USFM round trip',
				content: 'src/core/USFM_round_trip.md',
				description: 'Uses toJSON() then toUSFM() and compares with the original'
			},
			{
				name: 'JSON round trip',
				content: 'src/core/JSON_round_trip.md',
				description: 'Uses toUSFM() then toJSON() and compares with the original'
			}
		]
	}
];

module.exports = {
	title: `${upperFirst(camelCase(name))} v${version}`,
	ribbon: {
		url: repository.url,
		text: 'View on GitHub'
	},
	styles,
	theme,
	getComponentPathLine: (componentPath) => {
		const dirname = path.dirname(componentPath, '.js');
		const file = dirname.split('/').slice(-1)[0];
		const componentName = upperFirst(camelCase(file));
		return `import { ${componentName} } from "${name}";`;
	},
	usageMode: 'expand',
	exampleMode: 'expand',
	pagePerSection: true,
	sections,
	components: 'src/components/**/[A-Z]*.js',
	defaultExample: true,
	moduleAliases: {
		'rsg-example': path.resolve(__dirname, 'src'),
	},
	version,
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					loader: 'style-loader!css-loader',
				},
			],
		},
	},
};

