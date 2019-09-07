import React, { Component, ReactNode } from 'react';

import { withStyles, Typography } from '@material-ui/core';

import { IOwnProps, IStyleProps } from './types';
import styles from './styles';



class MainTitle extends Component<IOwnProps & IStyleProps> {
  render(): ReactNode {
    const {
      classes: {
        container,
        underline
      },
      children
    } = this.props;
    return(
      <div className={container}>
        <Typography variant="h5" color="primary">
          {children}
        </Typography>
        <hr className={underline}/>
      </div>
    );
  }
}

export default withStyles(styles)(MainTitle);