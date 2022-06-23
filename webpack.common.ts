import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { Configuration, EnvironmentPlugin } from 'webpack';

const config = (env: 'development' | 'production'): Configuration => ({
  entry: {
    app: './src/index.tsx',
    'time-keeper': './src/workers/time-keeper.ts',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: (pathData) => {
      if (pathData.chunk?.name === 'app') {
        return 'bundle.js';
      }

      return 'workers/[name].js';
    },
    publicPath: env === 'development' ? '/' : '',
  },
  plugins: [
    new EnvironmentPlugin({ REACT_APP_BASENAME: '' }),
    new CopyPlugin({
      patterns: [{ from: 'styles/**/*.css', to: 'css/[name][ext]' }],
    }),
    new CopyPlugin({
      patterns: [{ from: 'public/images/**/*.png', to: 'images/[name][ext]' }],
    }),
    new CopyPlugin({
      patterns: [{ from: 'public/favicon.ico', to: 'favicon.ico' }],
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      chunks: ['app'],
      basename: process.env.REACT_APP_BASENAME
        ? `/${process.env.REACT_APP_BASENAME}`
        : '',
    }),
  ],
});

export default config;
