const path = require('path')

module.exports = {
  mode:'development',
  entry: path.join(__dirname,'/src/client/app'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname,'/dist/static')
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader:'babel-loader',
      exclude: /node-modules/
    }]
  }
}
