@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :full_name, :post_ids
    json.photoUrl url_for(user.photo)
  end
end