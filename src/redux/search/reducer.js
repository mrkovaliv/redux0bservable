import CONSTANTS from "./constants";

const INITIAL_STATE = {
  posts: [],
  isLoading: false,
  error: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONSTANTS.GET_POSTS:
      return {
        ...state,
        isLoading: true,
      };
    case CONSTANTS.GET_POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case CONSTANTS.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
