import * as FollowAPIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";


export const createFollow = (follow) => {
  return dispatch => {
    return FollowAPIUtil.createFollow(follow).then(follow => dispatch(receiveFollow(follow)));
  };
};

export const deleteFollow = (currentUserId, userId) => {
  return dispatch => {
    return FollowAPIUtil.deleteFollow(userId).then(() => dispatch(removeFollow(currentUserId, userId)));
  };
};

const receiveFollow = (follow) => ({
  type: RECEIVE_FOLLOW,
  follow: follow
});

const removeFollow = (currentUserId, userId) => ({
  type: REMOVE_FOLLOW,
  currentUserId,
  userId
});