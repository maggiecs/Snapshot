import { RECEIVE_ALL_POSTS, RECEIVE_USER_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';
import merge from 'lodash/merge';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return merge({}, state, action.payload.posts);
    case RECEIVE_POST:
      return merge({}, state, { [action.post.id]: action.post });
    case RECEIVE_USER_POSTS:
      return merge({}, state, action.payload.posts);
    case REMOVE_POST:
      let newState = merge({}, state);
      delete newState[action.postId];
      return newState;
    default:
      return state;
  }
};

export default postsReducer;