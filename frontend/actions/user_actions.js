import * as UserApiUtil from "../util/user_api_util";

// export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER = "RECEIVE_USER";

export const fetchUser = (id) => {
  return dispatch => {
    return UserApiUtil.fetchUser(id).then(user => dispatch(receiveUser(user)));
  };
};

export const updateUser = (user) => {
  return dispatch => {
    return UserApiUtil.updateUser(user).then(user => dispatch(receiveUser(user)));
  };
};

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

