import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const commonStylePath = path.resolve(__dirname, 'src/styles/')

module.exports = {
		entry: {
			app:'src/app.js'
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].js',
			publicPath: ''  // this property value will be replaced by env config
		},
		resolve: {
			extensions: ['.js', '.jsx', '.json', '.scss'],
			alias:{
				src: path.resolve(__dirname, 'src')
			}
		},
		module:{
			rules:[
				{
					test:/\.font\.js$/,
					loaders: ['style-loader','css-loader', 'postcss-loader','fontgen-loader']
				},
				{
					test:/\.(js|jsx)$/,
					loader: 'babel-loader',
					exclude: /node_modules/
				},
				{
					test:/\.(scss|css)$/,
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: [
							'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]--[hash:base64:5]',
							'postcss-loader',
							`sass-loader?includePaths[]=${commonStylePath}`
						]
					})
				},
				{
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=1000'
	      },
	      {
	        // required for bootstrap icons
	        test: /\.(woff|woff2)(\?(.*))?$/,
	        loader: 'url?prefix=factorynts/&limit=5000&mimetype=application/font-woff'
	      },
	      {
	        test: /\.ttf(\?(.*))?$/,
	        loader: 'file?prefix=fonts/'
	      },
	      {
	        test: /\.eot(\?(.*))?$/,
	        loader: 'file?prefix=fonts/'
	      },
	      {
	        test: /\.svg(\?(.*))?$/,
	        loader: 'file?prefix=fonts/'
	      },
	      {
	        test: /\.otf(\?(.*))?$/,
	        loader: 'file?prefix=fonts/'
	      }
			]
		},
		plugins:[
			new webpack.DefinePlugin({
				'process.env':{
					'NODE_ENV':JSON.stringify('development')
				}
			}),
			new HtmlWebpackPlugin({
				filename:'./index.html',
				template: 'src/template.html',
				hash: true
			}),
			new ExtractTextPlugin({
				filename: '[name].css',
				allChunks: true
			})
		]
}
