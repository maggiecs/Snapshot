json.extract! @user, :id, :username, :email, :full_name, :bio, :website, :post_ids
json.photoUrl url_for(@user.photo)