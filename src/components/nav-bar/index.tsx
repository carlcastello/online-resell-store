import React, { Component } from "react";
import ReactDOM from 'react-dom';

import { withStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { ShoppingCart } from '@material-ui/icons';

import styles from './styles';
import { IOwnProps, IOwnState } from './types'; 

class NavBar extends Component<IOwnProps, IOwnState> {

  state = {
    isTransparent: true
  }

  handleScrollEvent = (height: number) => (): void => {
    if (window.scrollY < height) {
      this.setState({isTransparent: true});
    } else {
      this.setState({isTransparent: false});
    }
  }

  componentDidMount(): void {
    const DOMNode: any = ReactDOM.findDOMNode(this); 
    if (DOMNode) {
      window.addEventListener(
        'scroll',
        this.handleScrollEvent(DOMNode.offsetHeight)
      );
    }
  }

  render(): React.ReactNode {
    const {
      classes: {
        transparentAppBar,
        solidAppBar,
        transparentLogo,
        solidLogo,
      }
    } = this.props; 
    return(
      <AppBar className={this.state.isTransparent ? transparentAppBar : solidAppBar}>
        <Toolbar >
          <Typography
            variant="h5"
            color="inherit"
            className={
              this.state.isTransparent ? transparentLogo : solidLogo
            }>
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
