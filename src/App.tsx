import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import React, { FC, ReactElement } from 'react';
import Dashboard from './pages/dashboard/dashboard';
import { customTheme } from './theme/customTheme';
const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline>
        <div className="App">
          <Dashboard />
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
