 @follows.each do |follow|
 
  if @user.id != follow.follower_id 
    json.users do
      json.set! follow.follower_id do
        json.extract! follow.follower, :id, :username, :follower_ids, :followee_ids
        if follow.follower.photo.attached?
          json.photoUrl url_for(follow.follower.photo)
        else
          json.photoUrl default_url
        end
      end
    end
  end

  if @user.id != follow.followee_id 
    json.users do
      json.set! follow.followee_id do
        json.extract! follow.followee, :id, :username, :follower_ids, :followee_ids
        if follow.followee.photo.attached?
          json.photoUrl url_for(follow.followee.photo)
        else
          json.photoUrl default_url
        end
      end
    end 
  end

end