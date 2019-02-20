@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :full_name, :post_ids
    if user.photo.attached?
      json.photoUrl url_for(user.photo)
     else
        json.photoUrl default_url
    end 
    json.follower_ids user.followers.pluck(:id)
    json.followee_ids user.followees.pluck(:id)
  end
end