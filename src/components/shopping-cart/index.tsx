import React, { Component, MouseEvent } from 'react';
import {
  withStyles,
  IconButton,
  Menu,
  MenuItem,
  Typography
} from '@material-ui/core';
import { ShoppingCart as ShoppingCartIcon }  from '@material-ui/icons';


import { ICartItem } from '../../common/types';

import styles from './styles';
import { IOwnProps, IOwnState } from './types';

const cartItems: ICartItem[] = [
//   {
//   id: '123-234-345',
//   name: 'Hello World',
//   price: '13.400',
//   quantity: '2'
// }
]


class ShoppingCart extends Component<IOwnProps, IOwnState> {
  
  iconRef: any;

  state = {
    isOpen: false,
  }

  iconClickHandler = (event: MouseEvent): void => {
    this.setState((state: IOwnState) => ({
      isOpen: !state.isOpen,
    }));
  }

  onCloseHandler = (): void => {
    this.setState({
      isOpen: false
    })
  }

  renderIconButton = () => {
    return (
      <IconButton
        onClick={this.iconClickHandler}
        ref={(ref) => { this.iconRef = ref; }}>
        <ShoppingCartIcon  color="primary"/>
      </IconButton>
    );
  }

  renderCartItems = () => {
    return (
      <div>
        <MenuItem>
          <Typography>Carl</Typography>
        </MenuItem>
        <MenuItem>
          <Typography>Avery</Typography>
        </MenuItem>
        <div>
          Proceed To CheckOut
        </div>
      </div>
    );
  }

  renderEmptyCart = () => {
    return (
      <div></div>
    );
  }
  
  render () {
    const {
      classes: {
        menu,
        container
      }
    } = this.props;

    return (
      <div className={container}>
        {this.renderIconButton()}
        <Menu 
          keepMounted
          className={menu}
          onClose={this.onCloseHandler}
          open={this.state.isOpen}
          anchorEl={this.iconRef}
          transformOrigin={{
            horizontal: 360,
            vertical: 'top'
          }}>
          {cartItems ? this.renderCartItems() :this.renderEmptyCart()}
        </Menu>
      </div>
    )
  }
}

export default withStyles(styles)(ShoppingCart);