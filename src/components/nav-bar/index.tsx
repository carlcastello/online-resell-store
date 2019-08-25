import React, { Component } from "react";

import { withStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import ShoppingCart from "../shopping-cart";

import styles from './styles';
import { OwnProps } from './types'; 


class NavBar extends Component<OwnProps> {
  render(): React.ReactNode {
    const {
      classes: {
        appBar: appBarStyles,
        logo: logoStyles
      }
    } = this.props; 
    return(
      <AppBar className={appBarStyles}>
        <Toolbar >
          <Typography variant="h5" color="inherit" className={logoStyles}>
            THRIFT.ca
          </Typography>
          <div>
            <ShoppingCart />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(NavBar);
