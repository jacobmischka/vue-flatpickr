const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		example: './src/main.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	target: 'web',
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: {
					loader: 'vue-loader'
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			title: '@jacobmischka/vue-flatpickr',
			template: './src/index.ejs',
			xhtml: true
		})
	],
	devtool: 'source-map'
};
