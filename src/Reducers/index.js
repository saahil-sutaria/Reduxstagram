import {combineReducers} from "redux";
import commentReducer from './CommentReducer'
import postReducer from './PostReducer'
import pathReducer from './PathReducer'
import {routerReducer} from 'react-router';
import {addComment, IncrementLikes} from "../Actions/ActionCreators";


const rootReducer = combineReducers({commentReducer, postReducer, pathReducer})



export default rootReducer;
