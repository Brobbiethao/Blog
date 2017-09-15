import axios from 'axios'; // axios is a required dependency


export const FETCH_POSTS = 'fetch_posts';

const Root_Url = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=okaysurewhynot1';


// export function fetchPosts () {
//     const request = axios.get(`${Root_Url}/posts${API_KEY}`); // this is the api call combining both global values Root_Url and API_KEY

//     return {
//         type: Fetch_Posts,
//         payload: request // this assigns requested data to payload (response.data)
//     };
// }

export function fetchPosts () {
    const request = axios.get(`${Root_Url}/posts${API_KEY}`); 

    return {
        type: FETCH_POSTS,
        payload: request
    };
}
