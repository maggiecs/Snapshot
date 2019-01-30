@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :full_name, :post_ids
    if user.photo.attached?
      json.photoUrl url_for(user.photo)
     else
        json.photoUrl default_url
    end
  end
end