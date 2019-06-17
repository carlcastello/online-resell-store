import React, { Component } from 'react'

import { Typography } from '@material-ui/core';


import NavBar from '../../components/nav-bar';
import Heading from '../../components/heading';
import { HeadingSize } from '../../components/heading/enums';

import { OwnProps } from './types';
import SearchBar from '../../components/search-bar';

class Header extends Component<OwnProps> {
  handleSearchBarCallBack = (inputValues: string, selectedValues: string[]) => {
    console.log(inputValues, selectedValues);
  }

  render(): React.ReactNode {
    return(
      <div>
        <NavBar/>
        <Heading size={HeadingSize.MEDIUM}>
          <Typography variant="h2">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
          </Typography>
          <Typography>
            Mauris at congue purus. Curabitur ac hendrerit orci, et imperdiet orci. 
            Aliquam erat volutpat. Integer aliquam,
          </Typography>
          <SearchBar
            callback={this.handleSearchBarCallBack}
            strings={{placeHolder: "Search..."}}
          />
        </Heading>
      </div>
    );
  }
}
 
export default Header;
