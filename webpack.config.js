module.exports = {
    entry: {
        index: "./index.jsx",
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/dist',
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!sass-loader',
            },
            {
                test: /\.jpg$/,
                loader: "file?name=[path][name].[ext]"
            }
        ],
    },
    devtool: "eval",
    plugins: [],
}
