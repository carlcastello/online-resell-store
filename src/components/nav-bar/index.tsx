import React, { Component } from "react";

import { withStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { ShoppingCart } from '@material-ui/icons';

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
            <IconButton >
              <ShoppingCart color="primary"/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(NavBar);
