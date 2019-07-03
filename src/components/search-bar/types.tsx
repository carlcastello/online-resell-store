import { ValueType } from "react-select/lib/types";

export interface OwnProps {
  callback: (inputValue: string, selected: string[]) => void,
  strings: {
      placeHolder: string,
  }
  classes: {
    searchBarContainer: string,
    searchBar: string,
    searchIcon: string,
    searchIconContainer: string,
  }
}

export interface OwnState {
  inputValue: string,
  selected: ValueType<OptionType>,
  error: string
}

export interface OptionType {
  value: string,
  label: string,
}