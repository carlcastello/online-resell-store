import { ValueType } from "react-select/lib/types";

export interface IOwnProps {
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

export interface IOwnState {
  inputValue: string,
  selected: ValueType<IOptionType>,
  error: string
}

export interface IReduxProps {
  'fetchCategories': () => void;
}

export interface IOptionType {
  value: string,
  label: string,
}

export interface IStyleProps {
  fullwidth?: boolean,
}