import React, { Component, ReactNode } from 'react';

import { List, ListItem, ListItemText, ListSubheader  } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import styles from './styles';
import { IOwnProps, IOwnState, SideBarItems } from './types';

class SideBar extends Component<IOwnProps, IOwnState> {

  static defaultProps = {
    multiSelect: false,
  }

  // Typescript Can't read the IOwnStateTypes
  state: IOwnState = {
    selectedItems: []
  }

  handleClick = (value: string) => () => {
    if (this.props.multiSelect) {
      this.setState(({selectedItems}) => {
        if (selectedItems.includes(value)) {
          return({
            selectedItems:
              selectedItems.filter(selectedItem => selectedItem !== value)
          });
        }
        return({
          selectedItems: [...selectedItems, value]
        });
      });
    } else {
      this.setState({ selectedItems: [value] });
    }
  }

  render(): ReactNode {
    const {
      header,
      items,
      classes: {
        listContainer,
        listItem
      }
    } = this.props;
    const {
      selectedItems
    } = this.state;

    return (
      <List
        component="nav"
        aria-labelledby="list-subheader"
        subheader={
          <ListSubheader component="div" id="list-subheader">
            {header}
          </ListSubheader>
        }
        className={listContainer}>
        {items.map(({key, label}: SideBarItems) => 
          <ListItem 
            button
            onClick={this.handleClick(key)}
            selected={selectedItems.includes(key)}
            className={listItem}>
            <ListItemText primary={label}/>
          </ListItem>
        )}
      </List>
    );
  }
}

export default withStyles(styles)(SideBar);