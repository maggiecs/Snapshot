import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 5,
      offset: 0,
      prevPostsLength: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.props.clearPrevPosts();
    this.props.fetchPosts(this.state.limit, this.state.offset);
    window.addEventListener('scroll', this.handleScroll);

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

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
  }

  handleScroll() {
    let scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );

    if (((window.innerHeight + window.scrollY) >= (scrollHeight)) && (this.props.posts.length - this.state.prevPostsLength) >= this.state.limit) {
      this.loadMore();
      this.props.fetchPosts(this.state.limit, this.state.offset);
    }
  }

  loadMore() {
    this.setState({
      limit: this.state.limit,
      offset: this.state.offset + this.state.limit,
      prevPostsLength: this.props.posts.length
    });
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