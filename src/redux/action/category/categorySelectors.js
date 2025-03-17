import { createSelector } from 'reselect';

const selectCategoryState = (state) => state.category;

// Memoized selector: Returns the 'categories' array
export const selectCategories = createSelector(
  [selectCategoryState],
  (categoryState) => categoryState.categories
);

// Memoized selector: Returns the 'loading' state
export const selectCategoryLoading = createSelector(
  [selectCategoryState],
  (categoryState) => categoryState.loading
);

// Memoized selector: Returns the 'error' state
export const selectCategoryError = createSelector(
  [selectCategoryState],
  (categoryState) => categoryState.error
);
