json.extract! @user, :id, :username, :email, :full_name, :bio, :website
json.photoUrl url_for(@user.photo)