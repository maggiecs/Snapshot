 @comments.each do |comment|
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

if @post
  json.posts do
    json.set! @post.id do
      json.comment_ids @comments.ids 
    end
  end
end



