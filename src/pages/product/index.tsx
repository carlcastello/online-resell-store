import React, { Component, ReactNode } from 'react';
import {
  withStyles,
  Typography,
  Grid,
} from '@material-ui/core';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import { IProductCardDetail } from '../../common/types';
import MainTitle from '../../components/main-title';
import PreText from '../../components/pre-text';
import Button from '../../components/buttons';
import ProductCard from '../../components/product-card';
import { IVariant, IPadding } from '../../components/buttons/types';

import { IOwnProps, IReduxProps } from './types';
import styles from './styles';

class Product extends Component<IOwnProps & IReduxProps> {

  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  renderExtraInfo = () => {
    return (
      <div>
        <Typography>
          Nulla tempus risus in lectus ornare condimentum. Curabitur ut nisl at tortor lobortis feugiat viverra nec ipsum. Nulla vulputate eu nunc et lacinia. Nullam aliquam massa neque. Sed in dictum risus. Nunc elit nisl, eleifend vitae molestie luctus, porttitor non ipsum. Nam id sagittis lectus, et placerat ante.
        </Typography>
        <Typography>
          Ut eu turpis pretium, tristique lectus eu, sollicitudin nunc. Suspendisse ullamcorper porta magna, vitae ullamcorper sem pharetra a. Vivamus luctus, sem quis vulputate lacinia, augue leo facilisis sem, ut eleifend purus tellus sit amet nunc. Integer dignissim purus sit amet elit rhoncus posuere. Vestibulum rutrum accumsan leo id fermentum.
        </Typography>
      </div>
    )
  }

  renderDescriptionFooter = (): ReactNode => {
    const {
      classes: {
        descriptionFooter,
      }
    } = this.props;

    return (
      <div className={descriptionFooter}>
        <Typography variant='h3' color="primary">
          $44.44
        </Typography>
        <Button padding={IPadding.MEDIUM} variant={IVariant.PRIMARY} icon='shoppingCart'>
          Add To Cart
        </Button>
      </div>
    );
  }

  renderDescription = () => {
    const description = `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum sodales est, eu porta odio dignissim quis. Aliquam erat volutpat. Curabitur non felis urna. Curabitur cursus accumsan sagittis.
    `
    const {
      classes: {
        paragraph: paragraphStyle
      }
    } = this.props;
    return (
      <div>
        <MainTitle title="Featured Items" horizontalPadding={0}/>
        {description.split('\n').map((paragraph) =>           
          <Typography className={paragraphStyle}>
            {paragraph}
          </Typography>
        )}
        {this.renderDescriptionFooter()}
      </div>
    );
  }

  renderImageGallery = (): ReactNode => {
    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
        // thumbnailClass: imageGallery
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/',
        // thumbnailClass: imageGallery
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/',
        // thumbnailClass: imageGallery
      }
    ]
    return (
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        autoPlay={false}
        thumbnailPosition="bottom"
        showPlayButton={false}
        showNav={false}/> 
      );
  }

  renderMainInfo = (): ReactNode => {
    return (
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          {this.renderImageGallery()}
        </Grid>
        <Grid item sm={12} md={6}>
          {this.renderDescription()}
        </Grid>
      </Grid>
    )
  }

  renderRelatedItems = (): ReactNode => {
    const relatedItems: IProductCardDetail[] = [
      { 
        id: '123',
        name: 'Praesent tincidunt',
        sellerName: 'Orci varius',
        price: '$44.00',
        description: 'Orci varius natoque penatibus et magnis dis parturient montes',
      },
      {
        id: '233',
        name: 'Praesent tincidunt',
        sellerName: 'Orci varius',
        price: '$44.00',
        description: 'Orci varius natoque penatibus et magnis dis parturient montes',
      },
      {
        id: '556',
        name: 'Praesent tincidunt',
        sellerName: 'Orci varius',
        price: '$44.00',
        description: 'Orci varius natoque penatibus et magnis dis parturient montes',
      },
      {
        id: '565',
        name: 'Praesent tincidunt',
        sellerName: 'Orci varius',
        price: '$44.00',
        description: 'Orci varius natoque penatibus et magnis dis parturient montes',
      }
    ]

    if (relatedItems) {
      return (
        <Grid container spacing={1}>
          {relatedItems.map((item: IProductCardDetail, index: number) => 
            <Grid item md={3} sm={6} xs={12} key={item.id}>
              <ProductCard product={item}/>
            </Grid> 
          )}
        </Grid> 
      )
    }
    return null;
  } 

  render(): ReactNode {
    const {
      classes: {
        container
      }
    } = this.props;
    return(
      <div className={container}>
        <PreText>
          Hello World
        </PreText>
        {this.renderMainInfo()}
        <MainTitle title="Some Info" horizontalPadding={0}/>
        {this.renderExtraInfo()}
        <MainTitle title="Related Items" horizontalPadding={0}/>
        {this.renderRelatedItems()}
      </div>
    );
  }
}

export default withStyles(styles)(Product);