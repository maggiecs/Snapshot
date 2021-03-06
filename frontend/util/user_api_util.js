export const fetchUsers = (notFollowing) => {
  return $.ajax({
    method: "GET",
    url: "/api/users",
    data: { notFollowing }
  });
};

export const fetchSearchedUsers = (query) => {
  return $.ajax({
    method: "GET",
    url: "/api/users",
    data: { query }
  });
};

export const fetchUser = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  });
};

export const updateUser = (user) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    data: user,
    dataType: 'json',
    contentType: false,
    processData: false,
  });
};
