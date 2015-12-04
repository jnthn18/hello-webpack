module.exports = {
  entry: "./scripts/hello.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.sass$/, loader: 'style-loader!css-loader!sass-loader?indentedSyntax' },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  }
};