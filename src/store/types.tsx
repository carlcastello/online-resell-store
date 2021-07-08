import { IOptionType } from "../components/search-bar/component/types";
import { CATEGORY_PAGE } from "../common/constants";


export interface IPageStore {
  loadingState: {
    [CATEGORY_PAGE]: boolean
  }
}

export interface IReduxStore {
  page: IPageStore
  categories: IOptionType[],
}