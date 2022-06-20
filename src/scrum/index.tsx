import React from 'react';
import { useParams } from 'react-router-dom';

import LoadingMessage from '../components/loading-message';
import ErrorMessage from '../components/error-message';
import Component from './component';

import { useScrum } from '../queries';

export default () => {
  const { id } = useParams();
  const { isLoading, isError, error, isSuccess, data: scrum } = useScrum(id);

  return (
    <>
      {isLoading && <LoadingMessage />}
      {isError && error && <ErrorMessage message={error.message} />}
      {isSuccess && scrum && <Component {...scrum} />}
    </>
  );
};
