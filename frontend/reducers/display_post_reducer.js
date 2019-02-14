import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function displayPostReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return action.postId || null;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}