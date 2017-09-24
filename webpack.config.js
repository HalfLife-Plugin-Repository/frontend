/**
 * @file Webpack Configuration
 */

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const config = {
    entry: path.resolve(__dirname, 'src'),
    context: __dirname,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'assets'),
            path.resolve(__dirname, 'node_modules'),
        ]
    },
    module: {
        loaders: [
            {
                test:/\.js$/,
                exclude:/(node_modules)/,
                loader:'babel-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Half Life Plugin Repository',
            template: 'public/index.ejs',
            filename: 'index.html',
            hash: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
    ]
};

if(isProd){
    // minify
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: false
            },
            output: {
                comments: false,
            }
        })
    );
    // merge chunks
    config.plugins.push(
        new webpack.optimize.AggressiveMergingPlugin()
    );
} else {
    // set up webpack dev server
    config.entry = [
        'babel-polyfill',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        path.resolve(__dirname, 'src')
    ];
    config.plugins.push(
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    );
}

module.exports = config;
   