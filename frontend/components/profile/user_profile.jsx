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
    // if (this.props.user.id === this.props.currentUser.id) {
    //   return this.props.history.push('/profile');
    // }
  }

  componentDidUpdate(oldProps) {
    if (oldProps.match.params.id != this.props.match.params.id) {
      this.props.fetchUser(this.props.match.params.id);
      this.props.fetchUserPosts(this.props.match.params.id);
    }
  }

  renderFollow() {
    let user = this.props.user;
    let currentUser = this.props.currentUser;
    if (user.id === currentUser.id) {
      return (
        <div>
          <button><Link to="/accounts/edit">Edit Profile</Link></button>
          <button className="logout-button" onClick={this.props.logout}>Log Out</button>
        </div>
      );
    }
    if (user.id !== currentUser.id && user.follower_ids && !(user.follower_ids.includes(currentUser.id))) {
      return <button onClick={() => this.props.createFollow({followee_id: this.props.user.id, follower_id: this.props.currentUser.id })}>Follow</button>
    } else {
      return <button onClick={() => this.props.deleteFollow(currentUser.id, user.id)}>Following</button>
    } 
  }

  renderNumPosts(numPosts) {
    if (numPosts === 1) {
      return (
        <p><b>{numPosts} </b>post</p>
      );
    } else {
      return (
        <p><b>{numPosts} </b>posts</p>
      );
    }
  }

  renderNumFollowers(numFollowers) {
    if (numFollowers === 1) {
      return (
        <p><b>{numFollowers} </b>follower</p>
      );
    } else {
      return (
        <p><b>{numFollowers} </b>followers</p>
      );
    }
  }

  renderNumFollowings(numFollowees) {
    if (numFollowees === 1) {
      return (
        <p><b>{numFollowees} </b>following</p>
      );
    } else {
      return (
        <p><b>{numFollowees} </b>followings</p>
      );
    }
  }

  render() {
    let userPosts;
    let numPosts;
    let numFollowers;
    let numFollowees;

    if (this.props.user && this.props.user.post_ids) {
      numPosts = this.props.user.post_ids.length;
      numFollowers = this.props.currentUser.follower_ids.length;
      numFollowees = this.props.currentUser.followee_ids.length;
      userPosts = this.props.user.post_ids.map(post_id => {
        return <ProfilePostItem key={post_id} post_id={post_id} posts={this.props.posts} openModal={() => this.props.openModal(post_id)} />;
      }).reverse();
    } else {
      numPosts = 0;
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
              {this.renderFollow()}
            </div>
            <div className="main-profile-header-middle">
              {this.renderNumPosts(numPosts)}
              {this.renderNumFollowers(numFollowers)}
              {this.renderNumFollowings(numFollowees)}
            </div>
            <div className="main-profile-header-bottom">
              <p><b>{this.props.user.full_name}</b></p>
              <p>{this.props.user.bio}</p>
              <p><b>{this.props.user.website}</b></p>
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