import React, { Component, ReactNode } from 'react';
import {
  withStyles,
  Typography,
  Grid,
} from '@material-ui/core';

import { PlaceHolderImage } from '../../images';

import MainTitle from '../../components/main-title';
import PreText from '../../components/pre-text';
import Button from '../../components/buttons';
import { IVariant, IPadding } from '../../components/buttons/types';

import { IOwnProps, IReduxProps } from './types';
import styles from './styles';

class Product extends Component<IOwnProps & IReduxProps> {

  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  renderAttributes = () => {

  }

  renderDescription = () => {
    const description = `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum sodales est, eu porta odio dignissim quis. Aliquam erat volutpat. Curabitur non felis urna. Curabitur cursus accumsan sagittis.
      
      Curabitur elementum consectetur est vel suscipit. Etiam ultrices sapien sit amet dolor tempor consectetur. Pellentesque augue ante, mattis a quam scelerisque, sagittis venenatis mauris. Sed venenatis tempus elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
      
      Quisque ipsum arcu, facilisis sodales elit sagittis, bibendum fringilla sem. Etiam eu venenatis nibh, non volutpat augue. Nulla ut risus efficitur, vulputate massa sit amet, pellentesque augue. Aliquam sed maximus dui. Nam lorem sapien, faucibus at sem at, elementum posuere nisi. Quisque finibus semper dignissim. 
    `
    const {
      classes: {
        descriptionFooter,
        paragraph: paragraphStyle
      }
    } = this.props;
    return (
      <Grid container spacing={1}>
        <Grid item sm={12} md={6}>
        </Grid> 
        <Grid item sm={12} md={6}>
          <MainTitle title="Featured Items" horizontalPadding={0}/>
          {description.split('\n').map((paragraph) =>           
            <Typography className={paragraphStyle}>
              {paragraph}
            </Typography>
          )}
          <div className={descriptionFooter}>
            <Typography variant='h3' color="primary">
              $44.44
            </Typography>
            <Button padding={IPadding.MEDIUM} variant={IVariant.PRIMARY} icon='shoppingCart'>
              Add To Cart
            </Button>
          </div>
        </Grid>
      </Grid>
    );
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
        {this.renderDescription()}
        {this.renderAttributes()}
      </div>
    );
  }
}

export default withStyles(styles)(Product);