import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const rootURL = 'http://reduxblog.herokuapp.com/api';
const apiKey = '?key=iksdjfñakdiekwkkw';

export function fetchPosts() {
  const request = axios.get(`${rootURL}/posts${apiKey}`);
  return {
    type: FETCH_POSTS,
    payload: request,
  };
}

export function createPost(props) {
  const request = axios.post(`${rootURL}/posts${apiKey}`, props);

  return {
    type: CREATE_POST,
    payload: request,
  };
}

export function fetchPost(id) {
  const request = axios.get(`${rootURL}/posts/${id}${apiKey}`);

  return {
    type: FETCH_POST,
    payload: request,
  };
}

export function deletePost(id) {
  const request = axios.delete(`${rootURL}/posts/${id}${apiKey}`);

  return {
    type: DELETE_POST,
    payload: request,
  };
}

