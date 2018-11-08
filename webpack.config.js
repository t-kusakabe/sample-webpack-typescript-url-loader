module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.(gif|png|jpg)$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};
