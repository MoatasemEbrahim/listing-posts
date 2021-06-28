import {
  POSTS_LIST_REQUEST,
  POSTS_LIST_SUCCESS,
  POSTS_LIST_FAIL,
} from './constants';

const createAction = (type:string) => (payload?:unknown) => ({
  type,
  payload,
});


export const fetchPosts = createAction(POSTS_LIST_REQUEST);

export const fetchingPostsSucceed = createAction(POSTS_LIST_SUCCESS);

export const fetchingPostsFailed = createAction(POSTS_LIST_FAIL)
