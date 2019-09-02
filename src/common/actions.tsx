export const SET_PAGE_LOADING = 'SET_PAGE_LOADING_ACTION';

export const setPageLoading = (loadingState: boolean) => ({
    type: SET_PAGE_LOADING,
    payload: loadingState,
});