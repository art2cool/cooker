module.exports = {
    entry: './app/index.js',
    output: {
        path: './app/',
        filename: './app/bundle.js',
        sourceMapFilename: 'bundle.map'
    },
    watch: true,
    keepalive: true,
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
        ]
    },
    node: {
        fs: "empty"
    }
};