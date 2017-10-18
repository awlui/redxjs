const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const nodeEnv = process.env.npm_lifecycle_event;
const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
};

const commonConfig = merge([
  {
    entry: {
      app: './src/index.ts'
    },
    output: {
      path: PATHS.dist,
      filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'source-map',
  }
]);

const productionConfig = merge([
]);

const developmentConfig = merge([
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
    contentBase: path.join(process.cwd(), 'dist')
  }),
  // parts.lintjs({test: 'ts', include: PATHS.src}),
  {
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/public/index.html',
        chunksSortMode: 'dependency',
      }),
    ],
  }
]);
const testConfig = merge([
    {
        module: {
            rules: [{
                test: /\.ts$/,
                enforce: 'post',
                loader: 'istanbul-instrumenter-loader',
                options: {esModules: true},
                exclude: /node_modules|spec/,
            }]
        }
    }
]);
module.exports = (env) => {
  if (nodeEnv === 'test') {
    console.log('hit')
    return merge(commonConfig, testConfig);
  }
  if (env === 'production') {
    return merge(commonConfig, productionConfig);
  }
  return merge(developmentConfig, commonConfig);
};