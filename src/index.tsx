import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import App from './app';

const queryClient = new QueryClient();
const BASENAME = `/${process.env.REACT_APP_BASENAME || ''}`;

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App basename={BASENAME} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
  document.getElementById('root')
);
