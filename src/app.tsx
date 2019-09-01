import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import { ThemeProvider } from '@material-ui/styles';

import NavBar from './components/nav-bar';
import Home from './pages/home';
import Product from './pages/product';
import Products from './pages/products';
import Footer from './components/footer';

import MainReducer from './store/reducer';
import AppTheme from './app-theme';


const App: React.FC = () => {
  return (
    <Provider store={createStore(MainReducer)}>
      <Router>
        <ThemeProvider theme={AppTheme}>
          <NavBar/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/products/:id" component={Product} />
            </Switch>
          <Footer/>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
