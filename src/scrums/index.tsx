import React from 'react';

import LoadingMessage from '../components/loading-message';
import ErrorMessage from '../components/error-message';

import { useScrums } from '../queries';
import Blank from './blank';
import Component from './component';

export default () => {
  const { isLoading, isError, error, isSuccess, data: scrums } = useScrums();

  return (
    <>
      {isLoading && <LoadingMessage />}
      {isError && error && <ErrorMessage message={error.message} />}
      {isSuccess &&
        scrums &&
        (scrums.length === 0 ? <Blank /> : <Component scrums={scrums} />)}
    </>
  );
};
