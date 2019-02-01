import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePostItem from './profile_post_item';

class MainProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }

  componentDidMount() {
    this.props.fetchUserPosts(this.props.currentUser.id);
  }

  render() {
    let userPosts;
    if (this.props.currentUser.post_ids) {
      userPosts = this.props.currentUser.post_ids.map(post_id => {
        return <ProfilePostItem key={post_id} post_id={post_id} posts={this.props.posts} openModal={() => this.props.openModal(post_id)}/>;
      }).reverse();
    }
    
    
    return (
      <div className= "main-profile-container">
        <div className="main-profile-header">
          <div className="main-profile-header-photo">
            <img src={this.props.currentUser.photoUrl} />
          </div>
          <div className="main-profile-header-body">
            <div className="main-profile-header-top">
              <h2>{this.props.currentUser.username}</h2>
              <button><Link to="/accounts/edit">Edit Profile</Link></button>
              <button className="logout-button" onClick={this.props.logout}>Log Out</button>
            </div>
            <div className="main-profile-header-middle">
              <p><b>100 </b>posts</p>
              <p><b>100 </b>followers</p>
              <p><b>100 </b>following</p>
            </div>
            <div className="main-profile-header-bottom">
              <p>{this.props.currentUser.full_name}</p>
              <p>{this.props.currentUser.bio}</p>
              <p>{this.props.currentUser.website}</p>
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

export default MainProfile;