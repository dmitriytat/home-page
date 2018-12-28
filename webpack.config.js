module.exports = {
  entry: {
    index: './index.jsx',
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist',
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader?cacheDirectory=true',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
      {
        test: /\.jpg$/,
        loader: 'file?name=[path][name].[ext]',
      },
    ],
  },
  devtool: 'source-map',
};
