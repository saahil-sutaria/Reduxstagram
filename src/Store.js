import {createStore, combineReducers} from 'redux';

import comments from "./Data/comments";
import posts from "./Data/posts";

import commentReducer from "./Reducers/CommentReducer";
import postReducer from "./Reducers/PostReducer";
import pathReducer from "./Reducers/PathReducer";

/* export store object with actions and data */
const loadSampleData = {
    posts : posts,
    comments: comments,
    path : 0,
};

const store = createStore(combineReducers({comments:commentReducer, posts:postReducer, path: pathReducer}), loadSampleData ) //root reducer 

export default store;








