import { IOptionType } from "../components/search-bar/component/types";

export interface IReduxStore {
  page: {
    isPageLoading: boolean,
  }
  categories: IOptionType[],
}