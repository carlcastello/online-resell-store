import React, { Component, ReactNode } from 'react';
import { Grid, withStyles } from '@material-ui/core';

import { IProductCardDetail } from '../../common/types';
import ProductCard from '../../components/product-card';
import Heading from '../../components/heading';
import { HeadingSize } from '../../components/heading/enums';
import SearchBar from '../../components/search-bar';
import SideBar from '../../components/side-bar';
import PreText from '../../components/pre-text';

import styles from './styles';
import { IOwnProps } from './types';


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

class Products extends Component<IOwnProps> {
  handleSearchBarCallBack = (inputValues: string, selectedValues: string[]) => {
    console.log(inputValues, selectedValues);
  }

  renderProductList = (): ReactNode => {
    return (
      <Grid container spacing={1}>
        {featuredItems.map((item: IProductCardDetail, index: number) => 
          <Grid item sm={4} xs={12}>
            <ProductCard product={item}/>
          </Grid>
        )}
      </Grid>
    )
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

  renderSideBar = (): ReactNode => {
    return (
      <SideBar 
        multiSelect
        header="Filters"
        items={[
          {label: "hello world 1", key: "hello_world_1"},
          {label: "hello world 2", key: "hello_world_2"},
          {label: "hello world 3", key: "hello_world_3"},
          {label: "hello world 4", key: "hello_world_4"},
          {label: "hello world 5", key: "hello_world_5"},
          {label: "hello world 6", key: "hello_world_6"},
          {label: "hello world 7", key: "hello_world_7"}      
        ]}/>
    )
  }

  render(): ReactNode {
    const {
      classes: {
        mainGrid
      }
    } = this.props;
    return (
      <div>
        {this.renderHeader()}
        <Grid container spacing={1} className={mainGrid}>
          <Grid item sm={12} md={3}>
            {this.renderSideBar()}
          </Grid>
          <Grid item sm={12} md={9}>
            <PreText>
              Hello World 
            </PreText>
            {this.renderProductList()}
          </Grid>
        </Grid>
      </div>  
    );  
  }
}

export default withStyles(styles)(Products);