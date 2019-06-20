import React, { Component, ReactNode } from 'react';

import {
  withStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions
} from '@material-ui/core';

import { PlaceHolderImage } from '../../images';

import { IOwnProps } from './types';
import styles from './styles';
import { ShoppingCart } from '@material-ui/icons';

class ItemCard extends Component<IOwnProps> {

  static defaultProps = {
    media: {
      image: PlaceHolderImage,
      title: 'Place Holder'
    }
  }

  render(): ReactNode {
    const {
      string: {
        name,
        sellerName,
        description,
        price,
      },
      media: {
        image: mediaImage,
        title: mediaTitle
      },
      classes: {
        cardMedia,
        cardContent,
        sellerNameContent,
        cardAction,
        priceContent,
        addToCartButton
      }
    } = this.props;
    
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            className={cardMedia}
            image={mediaImage}
            title={mediaTitle}
          />
          <CardContent className={cardContent}>
            <Typography variant='h6'>
              {name}
            </Typography>
            <Typography className={sellerNameContent}>
              {sellerName}
            </Typography>
            <Typography>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={cardAction}>
          <Typography className={priceContent}>
            {price}
          </Typography>
          <Button className={addToCartButton}>
            Add to Cart
            <ShoppingCart/>
          </Button>
        </CardActions> 
      </Card>
    )
  }
}

export default withStyles(styles)(ItemCard);

