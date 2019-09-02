import { setPageLoading } from '../../common/actions';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES_ACTION'


export const fetchCategories = () => {
  return (dispatch: any) => {
    dispatch(setPageLoading(true));
    dispatch({type: FETCH_CATEGORIES, payload: 'Hello World'});
    var i = 0;
    while (i < 6000000000) {
      i = i + 1;
    }
    dispatch(setPageLoading(false));
  }
}