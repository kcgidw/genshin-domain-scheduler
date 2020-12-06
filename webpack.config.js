const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env = {}) => {
	const prod = env.NODE_ENV === 'production';

	const config = {
		mode: env.NODE_ENV || 'development',
		entry: [path.resolve(__dirname, 'src', 'index.js')],
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'index.bundle.min.js',
		},
		devtool: prod ? undefined : 'eval-cheap-source-map',
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
					test: /\.html$/,
					use: [
						{
							loader: 'file-loader',
							options: { name: '[name].html' },
						},
					],
				},
				{
					test: /\.(sc|c)ss$/,
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
			new webpack.HotModuleReplacementPlugin(),
		],
	};

	return config;
};
