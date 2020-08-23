import {createStore, combineReducers} from 'redux';
import comments from "./comments";
import posts from "./posts";
import commentReducer from "./Reducers/CommentReducer";
import postReducer from "./Reducers/PostReducer";

import rootReducers from './Reducers/index';
import {removeComment ,addComment, addPath, IncrementLikes} from "./Actions/ActionCreators";
import pathReducer from "./Reducers/PathReducer";

const loadSampleData = {
    posts: posts,
    comments: comments,
    path: 0,
};


const store = createStore(combineReducers({comments:commentReducer, posts:postReducer, path: pathReducer}), loadSampleData )



export default store;








