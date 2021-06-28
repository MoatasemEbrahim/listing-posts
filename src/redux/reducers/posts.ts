import { Reducer } from 'redux';
import {
  POSTS_LIST_REQUEST,
  POSTS_LIST_SUCCESS,
  POSTS_LIST_FAIL,
} from '../constants';

import {initialState} from './index'

const postsListReducer:Reducer = (state = initialState.postsData, action) => {
  switch (action.type) {
    case POSTS_LIST_REQUEST:
      return { loading: true, posts: [] };

    case POSTS_LIST_SUCCESS:
      return { loading: false, posts: action.payload };

    case POSTS_LIST_FAIL:
      return { loading: false, posts:[] ,error: action.payload };

    default:
      return state;
  }
};

export default postsListReducer;