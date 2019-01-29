import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePostItem from './profile_post_item';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
    this.props.fetchUserPosts(this.props.match.params.id);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.match.params.id != this.props.match.params.id) {
      this.props.fetchUser(this.props.match.params.id);
      this.props.fetchUserPosts(this.props.match.params.id);
    }
  }

  render() {
    let userPosts;
    if (this.props.user && this.props.user.post_ids) {
      userPosts = this.props.user.post_ids.map(post_id => {
        return <ProfilePostItem key={post_id} post_id={post_id} posts={this.props.posts} />;
      }).reverse();
    }

    return (
      <div className="main-profile-container">
        <div className="main-profile-header">
          <div className="main-profile-header-photo">
            <img src={this.props.user.photoUrl} />
          </div>
          <div className="main-profile-header-body">
            <div className="main-profile-header-top">
              <h2>{this.props.user.username}</h2>
            </div>
            <div className="main-profile-header-middle">
              <p>posts</p>
              <p>followers</p>
              <p>following</p>
            </div>
            <div className="main-profile-header-bottom">
              <p>{this.props.user.full_name}</p>
              <p>{this.props.user.bio}</p>
              <p>{this.props.user.website}</p>
            </div>
          </div>
        </div>
        <ul className="main-profile-photos">
          {userPosts}
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

export default UserProfile;