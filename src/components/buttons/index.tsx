import React, { Component, ReactNode } from 'react';

import { Button, withStyles } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import { IOwnProps, IVariant, IPadding, IStyleProps } from './types';
import styles from './styles';

class MainButton extends Component<IOwnProps & IStyleProps> {

  static defaultProps = {
    children: '',
    icon: '',
    variant: IVariant.PRIMARY,
    padding: IPadding.SMALL
  }

  chooseClassName = (): string => {
    const {
      variant,
      classes: {
        primaryContainer,
        secondaryContainer,
        defaultContainer
      }
    } = this.props;
    if (variant === IVariant.PRIMARY) {
      return primaryContainer;
    } else if (variant === IVariant.SECONDARY) {
      return secondaryContainer;
    } else {
      return defaultContainer; 
    }
  }

  chooseIcon = (): ReactNode | null => {
    const {
      icon,
      classes: {
        iconStyle,
      }
    } = this.props;

    if (icon === 'shoppingCart') {
      return <ShoppingCart className={iconStyle}/>
    } else {
      return null;
    }
  }

  render() {
    const {
      children,
    } = this.props;

    return (
      <Button className={this.chooseClassName()}>
        {children}
        {this.chooseIcon()}
      </Button>
    )
  }
}

export default withStyles(styles)(MainButton);