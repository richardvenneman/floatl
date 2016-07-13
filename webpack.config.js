module.exports = {
  entry: {
    index: './src/js/index.js'
  },

  devtool: '#inline-source-map',

  output: {
    path: './lib/js',
    filename: 'floatl.js',
    library: 'Floatl',
    libraryTarget: 'commonjs2'
  },

  resolve: {
    moduleDirectories: ['src/js']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
