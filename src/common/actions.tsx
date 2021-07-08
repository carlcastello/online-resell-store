export const SET_PAGE_LOADING = 'SET_PAGE_LOADING_ACTION';

export const setPageLoading = (loadingName: string) => (isLoading: boolean) => ({
    type: SET_PAGE_LOADING,
    payload: {[loadingName]: isLoading},
});