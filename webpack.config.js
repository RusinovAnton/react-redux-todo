var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        __dirname + '/app/index.js'
    ],
    output: {
        path: __dirname + '/public/assets/js',
        filename: 'app.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin({
        //    compress: {
        //        warnings: false
        //    }
        //})
    ]
};
