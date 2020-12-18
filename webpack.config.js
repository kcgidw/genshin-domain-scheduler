const path = require('path');
const webpack = require('webpack');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (env = {}) => {
	const prod = env.production;

	const config = {
		mode: prod ? 'production' : 'development',
		entry: ['./src/index.js'],
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
					use: [
						'source-map-loader',
						{
							loader: 'babel-loader',
							options: {
								plugins: [
									!prod &&
										require.resolve('react-refresh/babel'),
								].filter(Boolean),
							},
						},
					],
				},
				// {
				// 	test: /\.html$/,
				// 	use: [
				// 		{
				// 			loader: 'file-loader',
				// 			options: { name: '[name].html' },
				// 		},
				// 	],
				// },
				{
					test: /\.(sc|sa|pc|c)ss$/,
					use: [
						prod ? CssExtractPlugin.loader : 'style-loader',
						'css-loader',
						'postcss-loader',
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
			new CompressionPlugin(),
			!prod && new webpack.HotModuleReplacementPlugin(),
			!prod && new ReactRefreshPlugin(),
			prod &&
				new CssExtractPlugin({
					filename: 'style-[contenthash].css',
				}),
		].filter(Boolean),
	};

	return config;
};
