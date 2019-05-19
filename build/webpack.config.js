const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "main.js"
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
  devServer: {
    contentBase: './dist',
    stats: 'errors-only',
    compress: false,
    host: 'localhost',
    port: 8082
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template/index.html'
    }),
    new CleanWebpackPlugin({
      cleanBeforeBuildPatterns: ['./dist']
    })
  ]
}