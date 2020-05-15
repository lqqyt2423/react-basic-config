export const REQUEST_POSTS = 'REQUEST_POSTS';

export function requestPosts() {
  return {
    type: REQUEST_POSTS
  };
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  };
}

export function fetchPosts() {
  return function (dispatch) {
    dispatch(requestPosts());
    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    }).then(() => {
      dispatch(receivePosts(['a', 'b', 'c']));
    });
  };
}
