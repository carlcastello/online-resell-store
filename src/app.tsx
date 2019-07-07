import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ThemeProvider } from '@material-ui/styles';

import NavBar from './components/nav-bar';
import Home from './pages/home';
import Product from './pages/product';
import Footer from './components/footer';

import AppTheme from './app-theme';


const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={AppTheme}>
        <NavBar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Home} />
            <Route exact path="/product/:id" component={Product} />
          </Switch>
        <Footer/>
      </ThemeProvider>
    </Router>
  );
}

export default App;
