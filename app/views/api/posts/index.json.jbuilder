
@posts.each do |post|
  json.posts do 
    json.set! post.id do
      json.extract! post, :id, :body, :author_id, :comment_ids
      json.liker_ids post.likers.pluck(:id)
      json.photoUrl url_for(post.photo)
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

  post.comments.each do |comment|
    json.comments do
      json.set! comment.id do
        json.extract! comment, :id, :body, :post_id, :author_id
      end
    end
    
    json.users do
      json.set! comment.author_id do
        json.extract! comment.author, :id, :username
        if comment.author.photo.attached?
          json.photoUrl url_for(comment.author.photo)
        else
          json.photoUrl default_url
        end
      end
    end
  end

  
end


