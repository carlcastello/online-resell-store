import React, { Component, ReactNode } from 'react';

import {
  withStyles,
  Typography,
  Grid,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Card,
  CardActions,
  CardContent 
} from '@material-ui/core';

import { IProductCardDetail } from '../../common/types';
import Heading from '../../components/heading';
import { HeadingSize } from '../../components/heading/enums';
import SearchBar from '../../components/search-bar';
import PreText from '../../components/pre-text';
import ProductCard from '../../components/product-card';
import MainTitle from '../../components/main-title';
import Buttons from '../../components/buttons';

import { IOwnProps } from './types';
import styles from './styles';

class Checkout extends Component<IOwnProps> {
  handleSearchBarCallBack = (inputValues: string, selectedValues: string[]) => {
    console.log(inputValues, selectedValues);
  }

  renderHeader = (): ReactNode => (
    <Heading size={HeadingSize.SMALL}>
      <SearchBar
        callback={this.handleSearchBarCallBack}
        strings={{placeHolder: "Search..."}}
        fullwidth
      />
    </Heading>
  )

  renderCart = (): ReactNode => {
    const {
      classes: {
        contentContainer
      }
    } = this.props;
    return (
      <div className={contentContainer}>
        <MainTitle horizontalPadding={0}>
          Shopping Cart
        </MainTitle>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                Hello
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                Hello
              </CardContent>
            </Card>
          </Grid> 
        </Grid>
      </div>
    );
  }

  renderCheckoutForm = (): ReactNode => {
    const {
      classes: {
        contentContainer,
        formControl,
        formInput,
        formLabel
      }
    } = this.props;
    return (
      <div className={contentContainer}>
        <MainTitle horizontalPadding={0}>
          Checkout
        </MainTitle>
        <FormControl className={formControl} required>
          <InputLabel className={formLabel} htmlFor="name">Full Name</InputLabel>
          <Input className={formInput} id="name"/>
        </FormControl>
        <FormControl className={formControl} required>
          <InputLabel className={formLabel}  htmlFor="email">Email</InputLabel>
          <Input className={formInput} id="email"/>
        </FormControl>
        <FormControl className={formControl} required>
          <InputLabel className={formLabel} htmlFor="phone-number">Phone Number</InputLabel>
          <Input className={formInput} id="phone-numer"/>
        </FormControl>
        <Buttons>
          Order
        </Buttons>
      </div>
    );
  }

  renderMainContent = (): ReactNode => {
    return (
      <Grid container spacing={1}>
        <Grid item sm={8} xs={12}>
          {this.renderCart()}
        </Grid> 
        <Grid item sm={4} xs={12}>
          {this.renderCheckoutForm()}
        </Grid> 
      </Grid> 
    );
  }

  renderPreviouslyViewed = (): ReactNode => {
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
    return (
      <div>
        {this.renderHeader()}
        <div className={container}>
          <PreText>
            Hello World
          </PreText>
          {this.renderMainContent()}
          <MainTitle horizontalPadding={0}>
            Previously Viewed
          </MainTitle>
          {this.renderPreviouslyViewed()}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Checkout);