import * as R from "ramda";
import { combineEpics, ofType } from "redux-observable";
import { of, asyncScheduler } from "rxjs";
import {
  map,
  catchError,
  distinctUntilChanged,
  switchMap,
  throttleTime,
} from "rxjs/operators";
import { ajax } from "rxjs/ajax";

import CONSTANTS from "../constants";

import { setPosts, getPostsError } from "../actions";

const customFilter = (str) => R.filter((item) => R.includes(str, item.title));

const epicPost = (action$) =>
  action$.pipe(
    ofType(CONSTANTS.GET_POSTS),
    map((action) => action.payload),
    throttleTime(2000, asyncScheduler, { leading: true, trailing: true }),
    distinctUntilChanged(),
    switchMap((value) =>
      ajax.getJSON(`https://jsonplaceholder.typicode.com/posts`).pipe(
        map((response) => R.compose(setPosts, customFilter(value))(response)),
        catchError((error) => of(getPostsError(error.message)))
      )
    )
  );

export default combineEpics(epicPost);
