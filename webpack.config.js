module.exports = {
  entry: {
    index: __dirname + '/src/js/index.js'
  },

  devtool: '#inline-source-map',

  output: {
    path: __dirname + '/lib/js',
    filename: 'floatl.js',
    library: 'Floatl',
    libraryTarget: 'commonjs2'
  },

  resolve: {
    modules: ['src/js']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};
