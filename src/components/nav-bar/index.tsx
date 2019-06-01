import React, { Component } from "react";

import { withStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { ShoppingCartOutlined, Menu } from '@material-ui/icons';

import styles from './styles';

interface OwnProps {
  classes: {
    mainToolBar: string,
    secondaryToolBar: string,
    menuButton: string
    title: string,
  }
}

class NavBar extends Component<OwnProps> {

  renderMainToolBar = () => {
    return (
      <Toolbar className={this.props.classes.mainToolBar}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
          <Menu/>
        </IconButton>
        <Typography variant="h6" color="inherit" className={this.props.classes.title}>
          Online Resell Store
        </Typography>
        <div>
          <IconButton >
            <ShoppingCartOutlined/>
          </IconButton>
        </div>
      </Toolbar>
    ); 
  }

  render() {
    return(
      <AppBar position="static" color="default">
        {this.renderMainToolBar()}
        <Toolbar className={this.props.classes.secondaryToolBar}>
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
