import React from 'react';
import ProfilePostItem from '../profile/profile_post_item';

class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 18,
      offset: 0,
      prevPostsLength: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.props.clearPrevPosts();
    this.props.fetchPosts(this.state.limit, this.state.offset, this.props.feed);
    this.props.fetchUsers(this.props.currentUser.followee_ids);
    window.addEventListener('scroll', this.handleScroll);
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
      this.props.fetchPosts(this.state.limit, this.state.offset, this.props.feed);
    }
  }

  loadMore() {
    this.setState({
      limit: this.state.limit,
      offset: this.state.offset + this.state.limit,
      prevPostsLength: this.props.posts.length
    });
  }

  renderDiscoverUsers() {
    
  }

  render() {
    let that = this;
    let explorePosts = that.props.post_ids.map(post_id => {
      if (that.props.posts[post_id] && that.props.posts[post_id].liker_ids) {
        return <ProfilePostItem key={post_id} post_id={post_id} posts={that.props.posts} openPostModal={() => that.props.openPostModal(post_id)} />;
      }
    }).reverse();
  

    return (
      <div className="explore-container">
        <h2 className="explore-title">Explore</h2>
        <ul className="explore-photos">
          {explorePosts}
        </ul>
        <footer className="footer">
          <nav className="login-bottom-nav">
            <ul className="login-bottom-links">
              <li><a href="https://github.com/maggiecs">GITHUB</a></li>
              <li><a href="https://www.linkedin.com/in/maggie-chen1">LINKEDIN</a></li>
            </ul>
          </nav>
          <small className="footer-copy">
            &copy; 2019 SNAPSHOT
        </small>
        </footer>
      </div>
    );
  }
}



export default Explore;