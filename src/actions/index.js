import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
const rootURL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=iksdjfñakdiekwkkw';

export function fetchPosts() {
  const request = axios.get(`${rootURL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request,
  };
}
