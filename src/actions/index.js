import axios from 'axios'; // axios is a required dependency


export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post'

const Root_Url = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=okaysurewhynot1';


export function fetchPosts () {
    const request = axios.get(`${Root_Url}/posts${API_KEY}`); // this is the api call combining both global values Root_Url and API_KEY

    return {
        type: FETCH_POSTS,
        payload: request // this assigns requested data to payload (response.data)
    };
}

export function createPost(values, callback) {
    const request = axios.post(`${Root_Url}/posts${API_KEY}`, values)
    .then( () => callback());

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPost (id) {
    const request = axios.get(`${Root_Url}/posts/${id}${API_KEY}`)

    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost (id, callback) {
    const request = axios.delete(`${Root_Url}/posts/${id}${API_KEY}, values`)
    .then( () => callback());

    return {
        type: DELETE_POST,
        payload: id
    };
}