json.extract! @post, :id, :body, :author_id, :comment_ids
json.photoUrl url_for(@post.photo)