module.exports = {
  entry: {
    index: './lib/js/index.js'
  },

  devtool: '#inline-source-map',

  output: {
    path: './dist/js',
    filename: 'floatl.js',
    library: 'Floatl',
    libraryTarget: 'var'
  },

  resolve: {
    moduleDirectories: ['lib/js']
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
