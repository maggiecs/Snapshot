json.posts do
  json.set! @post.id do
    json.extract! @post, :id, :body, :author_id, :liker_ids
    json.comment_ids @post.comments.ids 
    if @post.photo.attached?
        json.photoUrl url_for(@post.photo)
    else
        json.photoUrl default_url
    end
  end
end
 
@post.comments.each do |comment|
  json.comments do
    json.set! comment.id do
      json.extract! comment, :id, :body, :author_id, :post_id
    end 
  end

  json.users do
    json.set! comment.author_id do
      json.extract! comment.author, :id, :username
    end 
  end
end


