import { combineReducers } from 'redux';

import modal from './modal_reducer';
import displayPost from './display_post_reducer';

export default combineReducers({
  modal,
  displayPost
});