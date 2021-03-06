module.exports = {
  context: __dirname + "/src",
  entry: {
    javascript: "./index.js",
    html: "./index.html"
  },
  output: {
    filename: "app.js",
    path: __dirname + "/build"
  },
  module:{
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.less$/,
        loader: "style!css!autoprefixer!less"
      },
      {
        test: /\.css$/,
        loader: "style!css"
      }
    ]
  }
}