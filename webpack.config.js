const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: ['babel-loader']
		},
		{
			test: /\.(css|scss|sass)$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						sourceMap: true,
						modules: true,
						camelCase: true,
						localIdentName: '[local]_[hash:base64:5]'
					}
				},
				'sass-loader'
			]
		},
		{
			test: /\.svg$/,
			use: [{
				loader: 'babel-loader'
			},
			{
				loader: 'react-svg-loader',
				options: {
					jsx: true
				}
			}
			]
		}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './dist/index.html',
			inject: false
		})
	],
	devServer: {
		contentBase: './dist',
		hot: true,
		disableHostCheck: true,
		historyApiFallback: true,
		watchOptions: {
			ignored: ['dist', 'node_modules']
		}
	}
};
