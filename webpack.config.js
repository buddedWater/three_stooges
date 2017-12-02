var webpack = require("webpack");
var path = require("path");

module.exports = {
	context: path.join(__dirname),
	entry:　"./src/js/root.js",
	devtool: "source-map",
	module: {
		loaders:[{
			test: /\.js?$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader',
			query : {
				presets: ['react','es2015'],
				plugins: ['react-html-attrs'],
			}
		},{
			test: /\.css$/,
			//loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]_loacl__[hash:base64:5]'
			loader: 'style-loader!css-loader'
		}]
	},
	devServer: {
		historyApiFallback : true
	},
	output: {
		path: __dirname ,
		publicPath: "/",
		filename: "bundle.js"
	}
};