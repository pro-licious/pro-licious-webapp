/**
 * Created by rvishwa on 03-08-2016.
 */
module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: './dist'
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
