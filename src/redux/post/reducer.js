import CONSTANTS from "./constants";

const INITIAL_STATE = {
  post: {
    userId: 0,
    id: 0,
    title: "",
    body: "",
  },
  error: null,
  isLoading: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONSTANTS.GET_POST:
      return {
        ...state,
        isLoading: true,
      };
    case CONSTANTS.GET_POST_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case CONSTANTS.SET_POST:
      return {
        ...state,
        post: action.payload,
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
