import React, { Component, ChangeEvent } from 'react';

import Select from 'react-select';
import { ValueType } from "react-select/lib/types";

import { withStyles } from '@material-ui/core';
import { Search } from '@material-ui/icons'

import styles from './styles'
import { OwnProps, OptionType, OwnState } from './types';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

class SearchBar extends Component<OwnProps, OwnState> {

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
      selected.map((select: OptionType) => select.value)
    );
  }

  handleOnChange = (selected: ValueType<OptionType>): void => 
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