import React, { Component, ReactNode } from 'react'

import { Typography, Grid, withStyles } from '@material-ui/core';

import { IProductCardDetail } from '../../common/types';

import Heading from '../../components/heading';
import { HeadingSize } from '../../components/heading/enums';
import SearchBar from '../../components/search-bar';
import MainTitle from '../../components/main-title';
import ProductCard from '../../components/product-card';

import { OwnProps } from './types';
import styles from './styles';


const featuredItems = [
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
const newItems = [
  { 
    id: '65',
    name: 'Praesent tincidunt',
    sellerName: 'Orci varius',
    price: '$44.00',
    description: 'Orci varius natoque penatibus et magnis dis parturient montes',
  },
  {
    id: '77',
    name: 'Praesent tincidunt',
    sellerName: 'Orci varius',
    price: '$44.00',
    description: 'Orci varius natoque penatibus et magnis dis parturient montes',
  },
  {
    id: '5536',
    name: 'Praesent tincidunt',
    sellerName: 'Orci varius',
    price: '$44.00',
    description: 'Orci varius natoque penatibus et magnis dis parturient montes',
  },
  {
    id: '5665',
    name: 'Praesent tincidunt',
    sellerName: 'Orci varius',
    price: '$44.00',
    description: 'Orci varius natoque penatibus et magnis dis parturient montes',
  }
]

class Header extends Component<OwnProps> {
  handleSearchBarCallBack = (inputValues: string, selectedValues: string[]) => {
    console.log(inputValues, selectedValues);
  }

  renderHeader = (): ReactNode => (
    <Heading size={HeadingSize.MEDIUM}>
      <Typography variant="h2">
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
      </Typography>
      <Typography className={this.props.classes.subTitle}>
        Mauris at congue purus. Curabitur ac hendrerit orci, et imperdiet orci. 
        Aliquam erat volutpat. Integer aliquam,
      </Typography>
      <SearchBar
        callback={this.handleSearchBarCallBack}
        strings={{placeHolder: "Search..."}}
      />
    </Heading>
  )

  renderFeaturedItems = (items: IProductCardDetail[]): ReactNode => {

    return (
      <div className={this.props.classes.gridContainer}>
        <Grid container spacing={1}>
          {items.map((item: IProductCardDetail, index: number) => 
            <Grid item md={3} sm={6} xs={12} key={item.id}>
              <ProductCard string={item}/>
            </Grid>  
          )}
        </Grid>
      </div>
    )
  }

  renderBody = (): ReactNode => {
    return (
      <div>
        <MainTitle title="Featured Items"/>
        {this.renderFeaturedItems(featuredItems)}
        <MainTitle title="New Items"/>
        {this.renderFeaturedItems(newItems)}
      </div>
    );
  }

  render(): ReactNode {
    return(
      <div>
        {this.renderHeader()}
        {this.renderBody()}
      </div>
    );
  }
}
 
export default withStyles(styles)(Header);
