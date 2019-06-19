import React from 'react';


import AppTheme from './app-theme';
import Home from './pages/home';

import { ThemeProvider } from '@material-ui/styles';
import NavBar from './components/nav-bar';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      <NavBar/>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
