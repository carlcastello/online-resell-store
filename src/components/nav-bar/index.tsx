import React, { Component } from "react";

import { withStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { ShoppingCartOutlined } from '@material-ui/icons';

import styles from './styles';

interface OwnProps {
  classes: {
    title: string,
  }
}

class NavBar extends Component<OwnProps> {
  render() {
    return(
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={this.props.classes.title}>
            Online Resell Store
          </Typography>
          <div>
            <IconButton >
              <ShoppingCartOutlined/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(NavBar);