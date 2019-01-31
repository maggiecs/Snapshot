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
    const posts = this.props.posts.map(post => {
      return (
        <PostIndexItem
          key={post.id}
          post={post} 
          users={this.props.users}
        />
      );
    }).reverse();
    
    return (
      <div className="post-index-container">
        <div className="post-index-images">
        {posts}
        </div>
      </div>  
    );
  }

}

export default PostIndex;