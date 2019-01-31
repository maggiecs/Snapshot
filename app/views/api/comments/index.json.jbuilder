json.comments do
  @comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :author_id, :post_id
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



