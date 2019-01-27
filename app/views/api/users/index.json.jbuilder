@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username
    # json.photo_url url_for(user.photo)
  end
end