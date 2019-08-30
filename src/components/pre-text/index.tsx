import React, { Component, ReactNode } from 'react';

import { withStyles, Typography } from '@material-ui/core';

import { IOwnProps } from './types';
import styles from './styles';


class PreText extends Component<IOwnProps> {
  render(): ReactNode {
    const {
      children,
      classes: {
        container,
      }
    } = this.props;
    return(
      <div className={container}>
        <Typography>
          {children}
        </Typography>
       </div>
    );
  }
}

export default withStyles(styles)(PreText);