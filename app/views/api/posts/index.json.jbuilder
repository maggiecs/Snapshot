
@posts.each do |post|
  json.posts do 
    json.set! post.id do
      json.extract! post, :id, :body, :author_id, :comment_ids
      json.photoUrl url_for(post.photo)
    end
  end

  post.comments.each do |comment|
    json.comments do
      json.set! comment.id do
        json.extract! comment, :id, :body, :post_id, :author_id
      end
    end
  end

  json.users do
    json.set! post.author_id do
      json.extract! post.author, :id, :username
      if post.author.photo.attached?
        json.photoUrl url_for(post.author.photo)
       else
        json.photoUrl default_url
      end
    end
  end
end


