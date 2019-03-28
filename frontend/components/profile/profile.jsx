import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePostItem from './profile_post_item';
import Footer from '../footer/footer';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    let user = this.props.user;
    let currentUser = this.props.currentUser;

    if (user.id !== currentUser.id) {
      this.props.fetchUser(this.props.match.params.id);
      this.props.fetchUserPosts(this.props.match.params.id);
    } else {
      this.props.fetchUserPosts(this.props.currentUser.id);
    } 
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
          <button className="button"><Link to="/accounts/edit">Edit Profile</Link></button>
          <button className="button" onClick={this.props.logout}>Log Out</button>
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
        <p className="profile-follow" onClick={this.props.openFollowerModal}><b>{numFollowers} </b>follower</p>
      );
    } else {
      return (
        <p className="profile-follow" onClick={this.props.openFollowerModal}><b>{numFollowers} </b>followers</p>
      );
    }
  }


  renderNumFollowings(numFollowees) {
    if (numFollowees === 1) {
      return (
        <p className="profile-follow" onClick={this.props.openFollowingModal}><b>{numFollowees} </b>following</p>
      );
    } else {
      return (
        <p className="profile-follow" onClick={this.props.openFollowingModal}><b>{numFollowees} </b>followings</p>
      );
    }
  }

  render() {
    let userPosts;
    let numPosts;
    let numFollowers;
    let numFollowees;
    let user = this.props.user;

    if (user && user.post_ids && user.followee_ids && user.follower_ids) {
      numPosts = this.props.user.post_ids.length;
      numFollowers = this.props.user.follower_ids.length;
      numFollowees = this.props.user.followee_ids.length;
      userPosts = this.props.user.post_ids.map(post_id => {
        return <ProfilePostItem key={post_id} post_id={post_id} posts={this.props.posts} openPostModal={() => this.props.openPostModal(post_id)} />;
      }).reverse();
    } else {
      numPosts = 0;
    }
    
    return (
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-header-photo">
            <img src={this.props.user.photoUrl} />
          </div>
          <div className="profile-header-body">
            <div className="profile-header-top">
              <h2>{this.props.user.username}</h2>
              {this.renderFollow()}
            </div>
            <div className="profile-header-middle">
              {this.renderNumPosts(numPosts)}
              {this.renderNumFollowers(numFollowers)}
              {this.renderNumFollowings(numFollowees)}
            </div>
            <div className="profile-header-bottom">
              <p><b>{this.props.user.full_name}</b></p>
              <p>{this.props.user.bio}</p>
              <p><b>{this.props.user.website}</b></p>
            </div>
          </div>
        </div>
        <ul className="profile-photos">
          {userPosts}
        </ul>
        <Footer />
      </div>
    );
  }
}



export default UserProfile;