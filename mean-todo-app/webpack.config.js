var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry:[
		'webpack-dev-server/client?http://127.0.0.1:8080/',
		'webpack/hot/only-dev-server',
		'./src'
	],
	Output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		modulesDirectories: ['node_modules','src'],
		extension: ['','.js']
	},
	//define array of loaders
	module: [
	{
		test: /\.js$/,
		exclude: /node_modules/,
		loader: 'babel',
		query:{
			preset: ['es2015']
		}
	}
	],
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	devServer: {
		hot: true,
		proxy: { 
			'*': 'http://localhost:3000'
		}
	}

};