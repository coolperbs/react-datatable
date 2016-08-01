var webpack = require('webpack');
module.exports = {
  // entry:['./test/entry.js'],
  entry:{
    bundle:'./test/entry.jsx'
  },
  output: {
    path: __dirname + '/assets/test/',
    publicPath: "/assets/test/",
    filename: 'bundle.js'
  },
  resolve: {
        extensions: ['', '.js', '.jsx']
  },
  module: {
	  loaders: [{
                  test: /\.jsx?$/,
                  exclude: /(node_modules|bower_components)/,
                  loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                  query: {
                      presets: ['react', 'es2015']
                  }
              }]
  }
};