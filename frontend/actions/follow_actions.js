import * as FollowAPIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";


export const createFollow = (follow) => {
  return dispatch => {
    return FollowAPIUtil.createFollow(follow).then(follow => dispatch(receiveFollow(follow)));
  };
};

export const deleteFollow = (follow_id) => {
  return dispatch => {
    return FollowAPIUtil.deleteFollow(follow_id).then(() => dispatch(removeFollow(follow_id)));
  };
};

const receiveFollow = (follow) => ({
  type: RECEIVE_FOLLOW,
  follow: follow
});

const removeFollow = (follow_id) => ({
  type: REMOVE_FOLLOW,
  follow_id
});