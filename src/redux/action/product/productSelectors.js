import { createSelector } from 'reselect';

// Input selector: Extracts the 'products' slice from the state
const selectProductsState = (state) => state.product;

// Memoized selector: Returns the 'products' array
export const selectProducts = createSelector(
  [selectProductsState],
  (productState) => productState.products
);

// Memoized selector: Returns the 'loading' state
export const selectLoading = createSelector(
  [selectProductsState],
  (productState) => productState.loading
);

// Memoized selector: Returns the 'error' state
export const selectError = createSelector(
  [selectProductsState],
  (productState) => productState.error
);

// Memoized selector: Returns the 'pagination' object
export const selectPagination = createSelector(
  [selectProductsState],
  (productState) => productState.pagination
);
