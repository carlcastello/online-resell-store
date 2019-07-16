import React, { Component, ReactNode } from 'react';

import {
  withStyles,
  Typography,
  Grid,
  Button 
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';


import { PlaceHolderImage } from '../../images';
import { IOwnProps, IReduxProps } from './types';
import MainTitle from '../../components/main-title';

class Product extends Component<IOwnProps & IReduxProps> {

  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  renderAttributes = () => {

  }


  renderDescription = () => {
    const sasda = `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum sodales est, eu porta odio dignissim quis. Aliquam erat volutpat. Curabitur non felis urna. Curabitur cursus accumsan sagittis.
      Curabitur elementum consectetur est vel suscipit. Etiam ultrices sapien sit amet dolor tempor consectetur. Pellentesque augue ante, mattis a quam scelerisque, sagittis venenatis mauris. Sed venenatis tempus elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
      Quisque ipsum arcu, facilisis sodales elit sagittis, bibendum fringilla sem. Etiam eu venenatis nibh, non volutpat augue. Nulla ut risus efficitur, vulputate massa sit amet, pellentesque augue. Aliquam sed maximus dui. Nam lorem sapien, faucibus at sem at, elementum posuere nisi. Quisque finibus semper dignissim. 
    `

    return (
      <Grid container spacing={1}>
        <Grid item sm={12} md={6}>
        </Grid> 
        <Grid item sm={12} md={6}>
          <MainTitle title="Featured Items" horizontalPadding={0}/>
          {sasda.split('\n').map((paragraph) =>           
            <Typography>
              {paragraph}
            </Typography>
          )}
          <Typography >
            $44.44
          </Typography>
          <Button>
            Add to Cart
            <ShoppingCart/>
          </Button>
        </Grid>
      </Grid>
    );
  }

  render(): ReactNode {
    return(
      <div>
        {this.renderAttributes()}
        {this.renderDescription()}
      </div>
    );
  }
}

export default Product;