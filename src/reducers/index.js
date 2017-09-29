import { combineReducers } from 'redux'; // this is required by the root, same concept as src/components/common
import PostsReducer from './reducer_posts'; // this imports the reducer
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({ //combineReducer is invoked with the store objecft value of 'posts'
  posts: PostsReducer, // this pushes postReducer into the store
  form: formReducer
  
});

export default rootReducer;
