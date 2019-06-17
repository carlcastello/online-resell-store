import React from 'react';


import AppTheme from './app-theme';
import Home from './pages/home';

import { ThemeProvider } from '@material-ui/styles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
