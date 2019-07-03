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

class ProductCard extends Component<IOwnProps> {

  static defaultProps = {
    media: {
      image: PlaceHolderImage,
      title: 'Place Holder'
    }
  }

  renderProductDescription = (): ReactNode => {
    const {
      string: {
        name,
        sellerName,
        description,
      },
      classes: {
        cardContent,
        productDescription,
      }
    } = this.props;
    return (
      <CardContent className={cardContent}>
        <Typography variant='h6'>
          {name}
        </Typography>
        <Typography className={productDescription}>
          {sellerName}
        </Typography>
        <Typography className={productDescription}>
          {description}
        </Typography>
      </CardContent>
    );
  }

  renderProductAction = (): ReactNode => {
    const {
      string: {
        price,
      },
      classes: {
        cardAction,
        priceContent,
        addToCartButton
      }
    } = this.props;
    return (
      <CardActions className={cardAction}>
        <Typography className={priceContent}>
          {price}
        </Typography>
        <Button className={addToCartButton}>
          Add to Cart
          <ShoppingCart/>
        </Button>
      </CardActions> 
    );
  }

  render(): ReactNode {
    const {
      media: {
        image: mediaImage,
        title: mediaTitle
      },
      classes: {
        cardMedia,
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
          {this.renderProductDescription()}
        </CardActionArea>
        {this.renderProductAction()}
      </Card>
    )
  }
}

export default withStyles(styles)(ProductCard);

