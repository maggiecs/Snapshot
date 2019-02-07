json.users do
    json.set! @user.id do
      if @user.id == current_user.id
        json.extract! @user, :email, :full_name
      end
      debugger
      json.extract! @user, :id, :username, :bio, :website, :full_name, :followee_ids, :follower_ids
      if @user.photo.attached?
        json.photoUrl url_for(@user.photo)
      else
        json.photoUrl default_url
      end
    end
end