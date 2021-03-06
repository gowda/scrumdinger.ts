import {
  HotModuleReplacementPlugin,
  Configuration as WebpackConfiguration,
} from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import merge from 'webpack-merge';
import generateCommon from './webpack.common';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = merge<Configuration>(
  generateCommon('development'),
  {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      port: 3000,
      static: {
        publicPath: 'http://localhost:3000/',
      },
      hot: true,
      historyApiFallback: true,
    },
    plugins: [new HotModuleReplacementPlugin()],
  }
);

export default config;
