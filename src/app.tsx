import React from 'react';


import AppTheme from './app-theme';
import NavBar from './components/nav-bar';

import { ThemeProvider } from '@material-ui/styles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      <NavBar/>
    </ThemeProvider>
  );
}

export default App;
