json.users do
    json.set! @user.id do
      if @user.id == current_user.id
        json.extract! @user, :email, :full_name
      end
      json.extract! @user, :id, :username, :bio, :website
      json.photoUrl url_for(@user.photo)
    end
end