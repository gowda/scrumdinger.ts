import React from 'react';
import { useParams } from 'react-router-dom';

import LoadingMessage from '../components/loading-message';
import ErrorMessage from '../components/error-message';
import Component from './component';

import { useTimeKeeper } from '../hooks/time-keeper';

export default () => {
  const { id } = useParams();
  const { isLoading, isError, error, isRunning, timer, skipSpeaker } =
    useTimeKeeper(id);

  return (
    <>
      {isLoading && <LoadingMessage />}
      {isError && error && <ErrorMessage message={error.message} />}
      {isRunning && timer && <Component {...timer} skipSpeaker={skipSpeaker} />}
    </>
  );
};
