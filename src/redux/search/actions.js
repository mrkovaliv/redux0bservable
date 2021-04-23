import CONSTANTS from "./constants";

export const getPosts = (title) => ({
  type: CONSTANTS.GET_POSTS,
  payload: title,
});
export const getPostsError = (error) => ({
  type: CONSTANTS.GET_POSTS_ERROR,
  payload: error,
});
export const setPosts = (posts) => ({
  type: CONSTANTS.SET_POSTS,
  payload: posts,
});
