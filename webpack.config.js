/* global process */
/* global __dirname */
var webpack = require("webpack");

var appPath = __dirname + "/app";
var distPath = __dirname + "/dist";

var config = {
    context: appPath,
    entry: "./app.js",
    output: {
        path: appPath,
        filename: "bundle.js"
    },
    
    plugins: [
        new webpack.DefinePlugin({
            IS_TESTING: process.env.NODE_ENV === "test" 
        })
    ],
    
    jshint: {
        emitErrors: true,
        failOnHint: true
    },
    
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: "jshint",
                include: appPath
            }            
        ],
        loaders: [
            /*
            {
                test: /\.js$/,
                loader: "babel",
                include: __dirname + "/app"
            }
            */
            {
                test: /\.js$/,
                loader: "ng-annotate",
                include: appPath
            },
            {
                test: /\.html$/,
                loader: "raw",
                include: appPath
            },
            {
                test: /\.css$/,
                // NOTE: loaders run from right to left and separated by a bang.
                loader: "style!css",
                include: appPath
            }
        ]
    }
};

if (process.env.NODE_ENV === "production") {
    config.output.path = distPath;
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.devtool = "source-map";
}

module.exports = config;
