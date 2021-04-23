import { combineEpics } from "redux-observable";

import postEpic from "./post/epic/getPost";
import postsEpic from "./search/epic/getPosts";

export default combineEpics(postEpic, postsEpic);
