import React, { Component, ReactNode} from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Typography, Box } from '@material-ui/core';

import NavBar from '../../components/nav-bar';
import Home from '../../pages/home';
import Product from '../../pages/product';
import Products from '../../pages/products';
import Footer from '../../components/footer';

import { IReduxProps } from './types';

class Router extends Component<IReduxProps> {

  renderPage = (): ReactNode => (
    <Box>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
      </Switch>
      <Footer/>
    </Box>
  )

  renderLoading = (): ReactNode => (
    <Typography>
      Hello World
    </Typography>
  );

  render(): ReactNode {
    const {
      isPageLoading
    } = this.props;
    return (
      <BrowserRouter>
        {isPageLoading ? this.renderLoading() : this.renderPage()}
      </BrowserRouter>    
    );
  }
}

export default Router;