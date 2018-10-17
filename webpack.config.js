const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
let pathsToClean = [
  'dist',
  'build'
]
let cleanOptions = {
  root: 'C:/Users/vingi/OneDrive/HRHaustonn2018/Hugbunadarfraedi/Labverkefni/lab08/dist',
  exclude: ['index.html']
}
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
    title: 'Greeting page',
    }),
    new CleanWebpackPlugin(pathsToClean,cleanOptions)
   ],
 entry: './src/client/index.js',
 mode: 'development',
 devServer: {
  port: 3000,
  open: true,
  proxy: {
  "/api": "http://localhost:8080"
  }
 }, 
 output: {
 filename: 'main.js',
 path: path.resolve(__dirname, 'dist')
 }}
