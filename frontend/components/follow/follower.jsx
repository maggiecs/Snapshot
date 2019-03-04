import React from 'react';
import { Link } from 'react-router-dom';

class Follower extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFollowerFollows(this.props.user.id, "followers");
  }

  renderFollowerButton(userFollower) {
    if (userFollower.id !== this.props.currentUser.id) {
      return (
        <button className="follow-button" onClick={() => this.props.createFollow({ followee_id: userFollower.id, follower_id: this.props.currentUser.id })}>Follow</button>
      );
    }
  }

  renderFollowingButton(userFollower) {
    if (userFollower.id !== this.props.currentUser.id) {
      return (
        <button className="following-button" onClick={() => this.props.deleteFollow(this.props.currentUser.id, userFollower.id)}>Following</button>
      );
    }
  }

  render() {
    let userFollowers;
    let user = this.props.user;
    let users = this.props.users;
    let currentUser = this.props.currentUser;
    if (user.follower_ids) {
      userFollowers = user.follower_ids.map(follower_id => {
        let userFollower = users[follower_id];
        if (userFollower && userFollower.follower_ids ) {
          if (!userFollower.follower_ids.includes(currentUser.id)) {
            return (
              <li key={follower_id} className="follow-item">
                <img src={userFollower.photoUrl} alt=""/>
                <Link className="follow-item-username"
                  to={`/users/${userFollower.id}`} onClick={() => this.props.closeModal()}>
                  <p>{userFollower.username}</p>
                </Link>
                {this.renderFollowerButton(userFollower)}
              </li>
            );
          } else {
            return (
              <li key={follower_id} className="follow-item">
                <img src={userFollower.photoUrl} alt="" />
                <Link className="follow-item-username"
                  to={`/users/${userFollower.id}`} onClick={() => this.props.closeModal()}>
                  <p>{userFollower.username}</p>
                </Link>
                {this.renderFollowingButton(userFollower)}
              </li>
            );
          }
        }
      }).reverse();
    }

    return (
      <div className="follow-container">
        <div className="follow-heading">Followers</div>
        <ul className="follow-list-items">
          {userFollowers}
        </ul>
      </div>
    );
  }
}

export default Follower;