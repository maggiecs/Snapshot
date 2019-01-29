
json.posts do 
  @posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :body, :author_id
      json.photoUrl url_for(post.photo)
    end
  end
 end

if @user
  json.users do
    json.set! @user.id do
      json.post_ids @posts.ids 
    end
  end
end
