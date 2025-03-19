// brandSelectors.js
import { createSelector } from "reselect";

// 1) Base selector: Extracts the 'brand' slice from the state
const selectBrandState = (state) => state.brand;

// 2) Memoized selector: Returns the array of brands
export const selectBrands = createSelector(
  [selectBrandState],
  (brandState) => brandState.brands
);

// 3) Memoized selector: Returns the loading state
export const selectBrandLoading = createSelector(
  [selectBrandState],
  (brandState) => brandState.loading
);

// 4) Memoized selector: Returns the error state
export const selectBrandError = createSelector(
  [selectBrandState],
  (brandState) => brandState.error
);
