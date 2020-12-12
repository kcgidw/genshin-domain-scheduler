const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env = {}) => {
	const prod = env.production;

	const config = {
		mode: prod ? 'production' : 'development',
		entry: [path.resolve(__dirname, 'src', 'index.js')],
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
				{
					test: /\.html$/,
					use: [
						{
							loader: 'file-loader',
							options: { name: '[name].html' },
						},
					],
				},
				{
					test: /\.(sc|pc|c)ss$/,
					use: ['style-loader', 'css-loader', 'postcss-loader'],
				},
				{
					test: /\.(png|jpg|gif|bmp)$/,
					use: ['url-loader'],
				},
			],
		},
		optimization: {
			minimize: prod,
			minimizer: [new TerserPlugin({ sourceMap: true })],
		},
		plugins: [
			new CompressionPlugin(),
			new webpack.DefinePlugin({
				PRODUCTION: prod,
			}),
			!prod && new webpack.HotModuleReplacementPlugin(),
			!prod && new ReactRefreshPlugin(),
		].filter(Boolean),
	};

	return config;
};
