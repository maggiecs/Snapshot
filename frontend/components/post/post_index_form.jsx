import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }


  render() {
    const {
      posts,
      users,
      currentUser,
      createPostLike,
      deletePostLike,
    } = this.props;

    const indexPosts = posts.map(post => {
      return (
        <PostIndexItem
          key={post.id}
          post={post} 
          users={users}
          currentUser={currentUser}
          createPostLike={createPostLike}
          deletePostLike={deletePostLike}
        />
      );
    }).reverse();
    
    return (
      <div className="post-index-container">
        <div className="post-index-images">
        {indexPosts}
        </div>
      </div>  
    );
  }

}

export default PostIndex;