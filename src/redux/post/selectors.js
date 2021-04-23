import { createSelector, createStructuredSelector } from "reselect";

const postSelector = (state) => state.post;

const dataSelector = createSelector(postSelector, ({ post }) =>
  post ? post : []
);
const isLoadingSelector = createSelector(
  postSelector,
  ({ isLoading }) => isLoading
);
const errorSelector = createSelector(postSelector, ({ error }) => error);

const singlePostSelector = createStructuredSelector({
  post: dataSelector,
  isLoading: isLoadingSelector,
  error: errorSelector,
});

export default singlePostSelector;
