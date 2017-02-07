import axios from 'axios';

const API_KEY: string = "?key=abscdefghi12345567";
const ROOT_URL: string = `http://reduxblog.herokuapp.com/api`;

const FETCH_POSTS: string = "FETCH_POSTS";
const FETCH_POSTS_PENDING: string = FETCH_POSTS + "_PENDING";
const FETCH_POSTS_COMPLETED: string = FETCH_POSTS + "_COMPLETED";

function fetchPosts() {
    const url = `${ROOT_URL}/posts${API_KEY}`;
    const requestPromise = axios.get(url);

    console.log("Request: " + requestPromise);
    return {
        type: FETCH_POSTS,
        payload: requestPromise
    };
}

export { fetchPosts, FETCH_POSTS, FETCH_POSTS_PENDING, FETCH_POSTS_COMPLETED };