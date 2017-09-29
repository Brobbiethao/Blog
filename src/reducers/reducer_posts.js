import _ from 'lodash'; //this is imported from lodash as a dependency so we can use it "_" which is lodash.
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions'; // this is imported from actions


export default function(state = {}, action) {
    switch(action.type) {
        case DELETE_POST:
            return _.omit(state, action.payload);

        case FETCH_POST:
            return { ...state, [action.payload.data.id]: action.payload.data }

        case FETCH_POSTS: 
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state; 
    }
}