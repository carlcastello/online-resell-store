import { IReduxStore } from "../../store/types";

export const getCategoriesSelector =
    (state: IReduxStore) => state.categories;