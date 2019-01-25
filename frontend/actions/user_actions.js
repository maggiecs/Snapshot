import * as UserApiUtil from "../util/user_api_util";

// export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

export const fetchUsers = () => {
  return dispatch => {
    return UserApiUtil.fetchUsers().then(users => dispatch(receiveAllUsers(users)));
  };
};

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

const receiveAllUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

// const receiveSearchedUsers = (query) => {
//   return {
//     type: RECEIVE_SEARCHED_USERS,
//     searchedUsers: User.where(username LIKE '#{params[:query]})
//   };
// };


