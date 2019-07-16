import React, { Component, ReactNode } from 'react';

import { withStyles, Typography } from '@material-ui/core';

import { IOwnProps, IStyleProps } from './types';
import styles from './styles';



class MainTitle extends Component<IOwnProps & IStyleProps> {
  render(): ReactNode {
    const {
      title,
      classes: {
        container,
        underline
      }
    } = this.props;
    return(
      <div className={container}>
        <Typography variant="h5" color="primary">
          {title}
        </Typography>
        <hr className={underline}/>
      </div>
    );
  }
}

export default withStyles(styles)(MainTitle);