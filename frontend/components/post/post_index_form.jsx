import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clearPrevPosts();
    this.props.fetchPosts();

    // window.onscroll = scrollFunction;

    // const el = document.querySelector('.logo-name');
    // const el2 = document.querySelector('.logo-separator');

    //   function scrollFunction() {
    //     let windowY = window.scrollY;
    //     if (windowY < 100) {
    //       el.classList.add('show');
    //       el2.classList.add('show');
    //       el.classList.remove('hide');
    //       el2.classList.remove('hide');
    //     } else {
    //       el.classList.add('hide');
    //       el2.classList.add('hide');
    //       el.classList.remove('show');
    //       el2.classList.remove('show');
    //     }
    //   }
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