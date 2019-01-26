json.extract! @post, :id, :body, :author_id
 json.photoUrl url_for(@post.photo)