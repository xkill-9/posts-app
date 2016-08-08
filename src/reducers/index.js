import { combineReducers } from 'redux';
import PostsReducer from 'reducers/posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
});

export default rootReducer;
