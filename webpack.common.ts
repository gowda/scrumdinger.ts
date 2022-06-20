import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { Configuration } from 'webpack';

const config = (env: 'development' | 'production'): Configuration => ({
  entry: './src/index.tsx',
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
    filename: 'bundle.js',
    publicPath: env === 'development' ? '/' : '',
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'styles/**/*.css', to: 'css/[name][ext]' }],
    }),
    new CopyPlugin({
      patterns: [{ from: 'public/images/**/*.png', to: 'images/[name][ext]' }],
    }),
    new CopyPlugin({
      patterns: [{ from: 'public/favicon.ico', to: 'favicon.ico' }],
    }),
    new HtmlWebpackPlugin({ template: 'src/index.ejs' }),
  ],
});

export default config;
