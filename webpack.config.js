const path = require('path');

module.exports = {
    // Path to my entry file
    entry: path.resolve(__dirname, 'client/index.js'),

    // path to where I want my webpack compiled code (bundle) to be saved
    output: {
        path: path.resolve(__dirname, 'client/dist'),
        filename: 'bundle.js',
    },

    // Babel config for react
    module: {
        rules: [
          {
            // test contains a regex that will be run on every file in this project - any matches will be run through the loader
            test: /\.(js|jsx)$/,

            // exclude contains a regex that will cause the *test* above to skip if a folder or file matches it
            exclude: /node_modules/,

            // contains an array containing the loaders we want to use to transform/transpile/compile our files before adding the to the bundle
            use: ['babel-loader'],
          },
        ],

    },

    // resolve.extensions will allow use of *require* or *import* without typing extensions
    // (as long as the extension is in this list)
    // this property is optional
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },

    // devServer will serve your react static files for testing only
    // This property is optional
    // You must npm install webpack-dev-server for this to work
    devServer: {
        //
        static: path.resolve('client/dist'),
    },
};