module.exports = {
  output: {
    library: 'floatl',
    libraryTarget: 'var',
    filename: 'floatl.js'
  },
  devtool: '#inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015']
        }
      }
    ]
  }
};
