import _ from 'lodash'; //this is imported from lodash as a dependency so we can use it "_" which is lodash.
import { FETCH_POSTS } from '../actions'; // this is imported from actions
// export default function(state, action) this calls state and action
// switch(action.type) using the switch method, fetch_posts will return mapkeys(data, 'data which we want to be assigned as a key')
export default function(state = {}, action) {
    switch(action.type) { 
        case FETCH_POSTS: 
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state; 
    }
}