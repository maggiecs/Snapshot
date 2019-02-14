 @follows.each do |follow|
  json.users do
    json.set! follow.follower_id do
      json.extract! follow.follower, :id, :username
    end
      json.set! follow.followee_id do
      json.extract! follow.followee, :id, :username
    end 
  end
end