import CONSTANTS from "./constants";

export const getPost = (id) => ({ type: CONSTANTS.GET_POST, payload: id });
export const getPostError = (error) => ({
  type: CONSTANTS.GET_POST_ERROR,
  payload: error,
});
export const setPost = (post) => ({ type: CONSTANTS.SET_POST, payload: post });
