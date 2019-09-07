import React, { Component, ReactNode } from 'react';

import { 
  withStyles, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia 
} from '@material-ui/core';

import { IOwnProps } from './types';
import styles from './styles';

import { PlaceHolderImage } from '../../images';


class CartItem extends Component<IOwnProps> {

  renderCartItemContent = (): ReactNode => {
    const {
      classes: {
        cardContent,
        detail: detailStyles,
        price: priceStyles,
      },
      cartItem: {
        title,
        price,
        quantity,
      }
    } = this.props;
    return (
      <CardContent className={cardContent}>
          <div className={detailStyles}>
            <Typography variant="h5">
              {title}
            </Typography>
            <Typography color="textSecondary">
              ${price}
            </Typography>
          </div>
          <div className={priceStyles}>
            <Typography variant="h5">
              {quantity}
            </Typography>            
          </div>
        </CardContent>
    )
  }


  render(): ReactNode { 
    const { 
      classes: {
        image: imageStyles,
        container
      },
      cartItem: {
        image,
        title
      }
    } = this.props;
    return (
      <Card className={container}>
        <CardMedia
          className={imageStyles}
          image={image?image:PlaceHolderImage}
          title={title}/>
        {this.renderCartItemContent()}
      </Card>
    );
  }
}

export default withStyles(styles)(CartItem);