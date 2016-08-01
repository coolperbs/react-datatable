var webpack = require('webpack');
module.exports = {
  entry:{
  	bundle : './test/entry.jsx'
  },
  output: {
    path: __dirname + '/assets/test/',
    publicPath: "/assets/test/",
    filename: 'bundle.js'
  },
  module: {
	  loaders: [
	         { test: /\.jsx?$/, loaders: ['babel'],   exclude: /node_modules/ },
             { test: /\.jsx$/,  loader: 'babel-loader',exclude: /node_modules/},
             { test: /\.css$/,  loader: "style!css" }
	  ]
  }
};