import { combineReducers } from 'redux';
import postsData from './posts';
import {IPost} from '../../types/posts';

export const initialState = {
  postsData: {
    posts: [],
    loading: false
  },
};


const rootReducer = combineReducers({ postsData });

export interface RootState {
  postsData: {
    posts: IPost[],
    loading: boolean,
    error?: string
  },
};

export default rootReducer;
