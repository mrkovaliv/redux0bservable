import { combineEpics, ofType } from "redux-observable";
import { of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

import CONSTANTS from "../constants";

import { setPost, getPostError } from "../actions";

const fetchPost = (action$) =>
  action$.pipe(
    ofType(CONSTANTS.GET_POST),
    switchMap((action) => {
      const data = ajax.getJSON(
        `https://jsonplaceholder.typicode.com/posts/${action.payload}`
      );
      return data.pipe(
        map((response) => setPost(response)),
        catchError((error) => of(getPostError(error.message)))
      );
    })
  );

export default combineEpics(fetchPost);
