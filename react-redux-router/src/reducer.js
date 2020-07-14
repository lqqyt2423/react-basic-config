import {
  REQUEST_POSTS,
  RECEIVE_POSTS
} from './actions';

const initialState = {
  posts: [],
  isFetching: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
  case REQUEST_POSTS:
    return {
      ...state,
      isFetching: true
    };
  case RECEIVE_POSTS:
    return {
      ...state,
      isFetching: false,
      posts: action.posts
    };
  default:
    return state;
  }
}

export default reducer;
