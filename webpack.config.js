/**
 * Created by yongyuehuang on 2017/4/19.
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//判断当前运行环境是开发模式还是生产模式
const nodeEnv = process.env.NODE_ENV || 'development';
const isPro = nodeEnv === 'production';

console.log('当前运行环境：', isPro ? 'production' : 'development');

var resolve = function (dir) {
    return path.join(__dirname, dir);
};

var plugins = [
    new ExtractTextPlugin('style.css')
];
if (isPro) {
    plugins.push(
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify(nodeEnv)
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    )
} else {
    plugins.push(
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify(nodeEnv)
            },
            BASE_URL: JSON.stringify('http://localhost:9009'),
        }),
        new webpack.HotModuleReplacementPlugin()
    )
}

module.exports = {
    entry: {
        app: ['./src/main']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist',
        chunkFilename: '[name].[hash].js'
    },
    plugins: plugins,
    node: {
        fs: 'empty'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader'],
            exclude: /node_modules/,
            include: resolve('src')
        },{
            test: /\.vue$/,
            use: ['vue-loader'],
            exclude: /node_modules/,
            include: resolve('src')
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            use: ['url-loader?limit=10000&name=files/[name].[hash:7].[ext]']
        }, {
            test: /\.(less|css)$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'less-loader'],
                fallback: 'style-loader'
            })
        }]
    },
    devServer: {
        contentBase: resolve('/'),
        historyApiFallback: true,
        compress: true,
        port: 3055,
        hot: true,
        inline: true,
        stats: {
            assets: true,
            children: false,
            modules: false,
            publicPath: false,
            timings: true,
            warnings: true,
            colors: {
                green: '\u001b[32m',
            }
        },
    }
};