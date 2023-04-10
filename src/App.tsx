import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import React, { FC, ReactElement } from 'react';
import Dashboard from './pages/dashboard/dashboard';
import { customTheme } from './theme/customTheme';
// import { ReactQueryDevtools } from 'react-query/devtools';
// import {  } from '@tanstack/react-query-devtools';
// create a client
const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline>
          <div className="App">
            <Dashboard />
          </div>
        </CssBaseline>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
