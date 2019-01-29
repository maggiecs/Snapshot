import { RECEIVE_FEED_IDS } from '../actions/post_actions';

const feedReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FEED_IDS:
      return Object.keys(action.posts);
    default:
      return state;
  }
};

export default feedReducer;