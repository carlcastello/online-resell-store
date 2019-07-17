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
import { ShoppingCart } from '@material-ui/icons';

import { PlaceHolderImage } from '../../images';
import { IOwnProps } from './types';
import styles from './styles';
import { Link } from 'react-router-dom';

class ProductCard extends Component<IOwnProps> {

  static defaultProps = {
    product: {
      id: "",
      image: PlaceHolderImage,
      name: "",
      sellerName: "",
      price: "",
      description: ""
    }
  }

  renderProductDescription = (): ReactNode => {
    const {
      product: {
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
      product: {
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
      product: {
        id,
        image: mediaImage,
        name: mediaTitle
      },
      classes: {
        cardMedia,
        link
      }
    } = this.props;
    
    return (
      <Link to={`products/${id}`} className={link}>
        <Card>
          <CardActionArea>
            <CardMedia
              className={cardMedia}
              image={mediaImage ? mediaImage : PlaceHolderImage}
              title={mediaTitle}
            />
            {this.renderProductDescription()}
          </CardActionArea>
          {this.renderProductAction()}
        </Card>
      </Link>
    )
  }
}

export default withStyles(styles)(ProductCard);

