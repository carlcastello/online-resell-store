import { IReduxStore } from '../store/types';
import { CATEGORY_PAGE } from './constants';

export const isFullPageLoading = (state: IReduxStore) => state.page.loadingState[CATEGORY_PAGE];