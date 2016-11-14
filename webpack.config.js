var path = require('path');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: "./app/main.ts",
    output: {
        filename: "./dist/[name].js"
    },
    devtool: "source-map",
    watch: true,
    watchOptions: {
        aggregateTime: 100
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'raw!postcss!sass',
                exclude: path.resolve('app/shared/styles')
            },
            {
                test: /\.scss$/,
                loader: 'style!css!postcss!sass',
                include: path.resolve('app/shared/styles')
            },
            {
                test: /\.(png|jpg|)$/,
                loader: 'file?name=dist/[path]/[name].[ext]'
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff&name=dist/fonts/[name].[ext]'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream&name=dist/fonts/[name].[ext]'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file?name=fonts/[name].[ext]'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml&name=dist/fonts/[name].[ext]'
            },
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".ts"],
        alias: {
            MODELS:     path.resolve(__dirname, 'app/models'),
            SERVICES:   path.resolve(__dirname, 'app/services'),
            COMPONENTS: path.resolve(__dirname, 'app/components'),
            TEMPLATES:  path.resolve(__dirname, 'app/templates')
        }
    },
    postcss: function () {
        return [precss, autoprefixer];
    }
}