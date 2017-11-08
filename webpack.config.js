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
      app: './src/index.tsx'
    },
    // externals: {
    //   'rxjs/Rx': 'rxjs',
    //   react: 'react',
    //   'react-dom': 'react-dom'
    // },
    output: {
      path: PATHS.dist,
      library: 'Demo',
      libraryTarget: 'umd',
      filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader']
            },
            // {
            //   enforce: 'pre',
            //   test: /\.tsx?$/,
            //   use: "source-map-loader"
            // }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    devtool: 'source-map',
  }
]);

const productionConfig = merge([
{
    externals: {
      'rxjs/Rx': 'rxjs',
      react: 'react',
      'react-dom': 'react-dom',
      'prop-types': 'prop-types'
    }
}
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
    // {
    //     module: {
    //         rules: [{
    //             test: /\.ts$/,
    //             enforce: 'post',
    //             loader: 'istanbul-instrumenter-loader',
    //             options: {esModules: true},
    //             exclude: /node_modules|spec/,
    //         }]
    //     }
    // }
]);
module.exports = (env) => {
  if (nodeEnv === 'test') {
    return merge(commonConfig, testConfig);
  } else if (env === 'production') {
    return merge(commonConfig, productionConfig);
  }
  return merge(developmentConfig, commonConfig);
};