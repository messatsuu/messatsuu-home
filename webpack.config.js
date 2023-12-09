const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public/build'),
    },
    resolve: {
        alias: {
            jquery: "jquery/src/jquery",
            $: "jquery/src/jquery"
        }
    }
};
