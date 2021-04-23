import { createSelector, createStructuredSelector } from "reselect";

const postsSelector = (state) => state.posts;

const dataSelector = createSelector(postsSelector, ({ posts }) =>
  posts ? posts : []
);
const isLoadingSelector = createSelector(
  postsSelector,
  ({ isLoading }) => isLoading
);

const errorSelector = createSelector(postsSelector, ({ error }) =>
  error ? error : null
);

const searchSelector = createStructuredSelector({
  posts: dataSelector,
  isLoading: isLoadingSelector,
  error: errorSelector,
});

export default searchSelector;
