var path = require('path');

module.exports = {
	context: path.resolve('./src/client/app/'),
	entry: './app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve('build/js/'),
		publicPath: '/src/client/app/',
	},
	devServer: {
		contentBase: './src/client'
	},
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loader: 'eslint-loader',
				exclude: /node_modules/
			}
		],
		loaders: [{
			test: /\.js$/,
			loader: 'babel',
			exclude: /node_modules/
		},
		{
			test: /\.scss$/,
			loader: 'style-loader!css-loader!resolve-url-loader!sass-loader',
			exclude: /node_modules/
		}
]
	}
};
