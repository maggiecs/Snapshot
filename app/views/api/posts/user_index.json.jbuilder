
json.posts do 
  @posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :body, :author_id, :created_at, :liker_ids, :comment_ids
      if post.photo.attached?
        json.photoUrl url_for(post.photo)
      else
        json.photoUrl default_url
      end
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

json.users do
  json.set! current_user.id do
    json.extract! current_user, :follower_ids, :followee_ids
    json.post_ids current_user.posts.ids
  end
end

