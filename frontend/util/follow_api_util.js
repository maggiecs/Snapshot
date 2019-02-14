
export const fetchFollowerFollows = (userId, followers) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}/follows`,
    data: { followers }
  });
};

export const fetchFolloweeFollows = (userId, followees) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}/follows`,
    data: { followees }
  });
};

export const createFollow = (follow) => {
  return $.ajax({
    method: "POST",
    url: `/api/users/${follow.followee_id}/follows`,
    data: { follow }
  });
};

export const deleteFollow = (userId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/users/${userId}/follows`,
  });
};
