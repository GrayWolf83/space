const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const mode =
	process.env.NODE_ENV === 'production' ? 'production' : 'development'

const target = process.env.NODE_ENV === 'production' ? 'browserslist' : 'web'

const plugins = [
	new HtmlWebpackPlugin({
		template: './public/index.html',
	}),
	new MiniCssExtractPlugin({
		filename: '[name].css',
	}),
	new CleanWebpackPlugin(),
	new CopyPlugin({
		patterns: [{ from: 'public/images', to: 'images' }],
	}),
]

if (process.env.SERVE) {
	plugins.push(new ReactRefreshWebpackPlugin())
}

module.exports = {
	mode,
	plugins,
	target,
	entry: './src/index.tsx',
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, 'build'),
		assetModuleFilename: 'assets/[hash][ext][query]',
		clean: true,
	},
	devServer: {
		static: '/build',
		port: 3000,
		open: true,
	},
	module: {
		rules: [
			{ test: /\.(html)$/, use: 'html-loader' },
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: ['ts-loader'],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
}
