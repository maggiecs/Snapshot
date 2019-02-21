# README

Live site: [Snapshot](https://snapshot-mc.herokuapp.com/#/)

Snapshot, an Instagram clone, is a photo sharing application that allows users to publicly share their photos. Users can update their profile, upload photos to create posts, and like and comment on posts.

### Technologies Used

Snapshot is built on a Ruby on Rails backend with a React-Redux frontend.

Amazon Web Services is used to store the uploaded photos.

### Features and Functionality

User Authentication - Users are able to log in to Snapshot and have access to exclusive Snapshot features.

![User Splash](https://s3.amazonaws.com/snapshot-app-deve/user_splash_page.png)

Posts - Authenticated users are able to create, edit, and delete posts. Users can create posts by uploading a photo. They can add a description along with that photo and edit the description if needed. Users can also delete their post.

Posts are displayed in the user's feed page, explore page, and profile page. The user's profile page only displays that particular user's posts while the feed page displays all of the users' posts. To query the server efficiently, I used Active Record querying to fetch only the particular user's posts when on the user profile page and all of the posts when on the feed page.

```ruby
  def index
    if params[:user_id]
      @user = User.find(params[:user_id])
      @posts = @user.posts
      render "api/posts/user_index"
    else
      @user = current_user
      followee_ids = current_user.followees.pluck(:id).push(current_user.id)
      if params[:feed] == "true"
        @posts = Post.with_attached_photo.where(author_id: followee_ids).includes(:author).order(id: :desc).limit(params[:limit]).offset(params[:offset])
      else
        @posts = Post.with_attached_photo.where.not(author_id: followee_ids).includes(:author).order(id: :desc).limit(params[:limit]).offset(params[:offset])
      end
      render "api/posts/index"
    end  
  end
```


![User Profile](https://s3.amazonaws.com/snapshot-app-deve/user_profile.png)

Likes and Comments - Authenticated users are able to comment and like posts. Users are able to comment as many times they want on a post. An x button should appear next to all of the users' comments to allow users to delete their previous posts. Users are able to like a post once by clicking on the heart button and remove that like by clicking on the heart button again.

The likes are displayed differently depending on the number of likes. I created a renderLikes method, such that it takes in the length of the liker_ids array in the post slice of state. 

```javascript
 renderLikes(length) {
    if (length === 0) { 
      return (
        <p>Be the first to <span onClick={this.addPostLike} className="post-index-first-like" ><b>like this</b></span ></p>
      );
    } else if (length === 1) {
      return (
        <p>1 like</p>
      );
    } else {
      return (
        <p>{length} likes</p>
      );
    }
  };
```

![User Comments](https://s3.amazonaws.com/snapshot-app-deve/comment_image.png)

Follows - Authenticated users are able to follow and unfollow other users.

![Follows Image](app/assets/images/readme_follows_description.png)


Search - Users on Snapshot can search for other users' profiles using the search bar. Users can search by username or full name. Clicking on the searched user in the dropdown redirects the user to the searched user's profile page.

```ruby
 @users = User.where("lower(username) LIKE ? or lower(full_name) LIKE ?", "%#{params[:query].downcase}%", "%#{params[:query].downcase}%")
```

![User Search](https://s3.amazonaws.com/snapshot-app-deve/user_feed.png)

### Future Implementations

The following are features that I plan to add:

* Notification - Users can receive notifications of when other users like and comment on their posts. This feature would be implemented using websockets.
* Direct Messaging - Users can send messages to other users. This feature would also be implemented using websockets.
