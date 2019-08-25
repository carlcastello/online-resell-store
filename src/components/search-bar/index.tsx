import React, { Component } from 'react';

import Select from 'react-select';
import { ValueType } from "react-select/lib/types";

import { withStyles } from '@material-ui/core';
import { Search } from '@material-ui/icons'

import styles from './styles'
import { IOwnProps, IStyleProps, IOptionType, IOwnState } from './types';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

class SearchBar extends Component<IOwnProps & IStyleProps, IOwnState> {

  state = {
    inputValue: '',
    selected: [],
    error: ''
  }

  onSubmit = (): void => {
    const {
      inputValue,
      selected,
    } = this.state;
    this.props.callback(
      inputValue,
      selected.map((select: IOptionType) => select.value)
    );
  }

  handleOnChange = (selected: ValueType<IOptionType>): void => 
    this.setState({selected});
  

  handleOnInputChange = (inputValue: string): void => 
    this.setState({inputValue})

  render(): React.ReactNode {
    const {
      strings: {
        placeHolder,
      },
      classes: {
        searchBarContainer,
        searchBar,
        searchIcon,
        searchIconContainer
      }
    } = this.props;
    return(
      <div className={searchBarContainer}>
        <Select
          classNamePrefix="select"
          className={searchBar}
          isMulti
          placeholder={placeHolder}
          closeMenuOnSelect={false}
          options={options}
          onChange={this.handleOnChange}
          onInputChange={this.handleOnInputChange}
        />
        <div className={searchIconContainer}>
          <Search
            className={searchIcon}
            onClick={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SearchBar);