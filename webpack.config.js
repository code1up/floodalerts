/* global __dirname */

module.exports = {
    context: __dirname + "/app",
    entry: "./app.js",
    output: {
        path: __dirname + "/app",
        filename: "bundle.js"
    },
    
    module: {
        loaders: [
            /*
            {
                test: /\.js$/,
                loader: "babel",
                exclude: "node_modules"
            }
            */
            {
                test: /\.html$/,
                loader: "raw",
                exclude: "node_modules"
            },
            {
                test: /\.css$/,
                // NOTE: loaders run from right to left and separated by a bang.
                loader: "style!css",
                exclude: "node_modules"
            }
        ]
    }
};
