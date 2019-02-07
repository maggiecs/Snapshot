
export const createFollow = (follow) => {
  debugger
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