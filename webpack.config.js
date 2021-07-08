const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = (env = {}) => {
	const prod = env.production;

	const config = {
		mode: prod ? 'production' : 'development',
		entry: ['./src/main.js'],
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'index.bundle.min.js',
		},
		devtool: prod ? undefined : 'source-map',
		devServer: {
			hot: true,
			contentBase: './dist',
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: ['source-map-loader', 'babel-loader'],
				},
				{
					test: /\.vue$/,
					loader: 'vue-loader',
				},
				{
					test: /\.(sc|sa|pc|c)ss$/,
					use: [
						prod ? CssExtractPlugin.loader : 'style-loader',
						'css-loader',
						'sass-loader',
					],
				},
				{
					test: /\.(png|jpg|gif|bmp|webp)$/,
					use: ['url-loader'],
				},
			],
		},
		optimization: {
			minimize: prod,
			minimizer: [
				new TerserPlugin(),
				prod && new CssMinimizerPlugin(),
			].filter(Boolean),
		},
		plugins: [
			new HtmlPlugin({
				template: './src/index.html',
			}),
			new VueLoaderPlugin(),
			new CompressionPlugin(),
			!prod && new webpack.HotModuleReplacementPlugin(),
			prod &&
				new CssExtractPlugin({
					filename: 'style-[contenthash].css',
				}),
		].filter(Boolean),
	};

	return config;
};
