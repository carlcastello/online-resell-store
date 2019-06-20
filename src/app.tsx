import React from 'react';

import { ThemeProvider } from '@material-ui/styles';

import NavBar from './components/nav-bar';
import Home from './pages/home';
import Footer from './components/footer';

import AppTheme from './app-theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      <NavBar/>
      <Home/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
