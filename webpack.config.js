module.exports = {
  entry: './lib/js/floatl.js',
  output: {
    library: 'floatl',
    libraryTarget: 'umd',
    filename: 'dist/js/floatl.js'
  },
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
