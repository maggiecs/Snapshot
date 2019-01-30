json.extract! user, :id, :username, :email, :full_name, :bio, :website
 if user.photo.attached?
    json.photoUrl url_for(user.photo)
 else
    json.photoUrl default_url
  end