import React, { Component } from 'react';
import { withStyles, InputBase, WithStyles } from '@material-ui/core';
import { Search } from '@material-ui/icons'

import styles from './styles'

interface OwnProps {
  classes: {
    search: string
  } 
  //  {
  //   search: any,
    // searchIcon: string,
    // inputRoot: string,
    // inputInput: string,
  // }
}

class SearchBar extends Component<OwnProps, any> {
  render() {
    return(
      <div>
        <div>
          <Search />
        </div>
        <InputBase
          placeholder="Search..."
        />
      </div>
    );
  }
}

export default withStyles(styles)(SearchBar);