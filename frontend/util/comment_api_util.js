export const fetchComments = (postId) => {
  return $.ajax({
    method: "GET",
    url: `/api/posts/${postId}/comments`,
  });
}

export const createComment = (comment) => {
  return $.ajax({
    method: "POST",
    url: `/api/posts/${comment.post_id}/comments`,
    data: { comment }
  });
};

export const deleteComment = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/comments/${id}`,
  });
};