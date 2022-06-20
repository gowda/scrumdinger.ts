import merge from 'webpack-merge';
import { Configuration } from 'webpack';
import generateCommon from './webpack.common';

const config: Configuration = merge(generateCommon('production'), {
  mode: 'production',
});

export default config;
