import React from 'react';
import { Link } from 'react-router-dom';

class Follower extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFollowerFollows(this.props.user.id, "followers");
  }

  render() {
    let userFollowers;
    let user = this.props.user;
    let users = this.props.users;
    let currentUser = this.props.currentUser;
    if (user.follower_ids) {
      userFollowers = user.follower_ids.map(follower_id => {
        let userFollower = users[follower_id];

        // if (follower_id !== this.props.currentUser.id) {
        //   let followButton = <button className="user-submit" onClick={() => this.props.createFollow({ followee_id: userFollower.id, follower_id: this.props.currentUser.id })}>Follow</button>;
        //   let followingButton = <button className="user-submit" onClick={() => this.props.deleteFollow(currentUser.id, userFollower.id)}>Following</button>
        // }

        if (userFollower && userFollower.follower_ids ) {
          if (!userFollower.follower_ids.includes(currentUser.id)) {
            return (
              <li key={follower_id} className="follow-item">
                <img src={userFollower.photoUrl} alt=""/>
                <Link className="follow-item-username"
                  to={`/users/${userFollower.id}`} onClick={() => this.props.closeModal()}>
                  <p>{userFollower.username}</p>
                </Link>
                <button className="user-submit" onClick={() => this.props.createFollow({ followee_id: userFollower.id, follower_id: this.props.currentUser.id })}>Follow</button>
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
                <button className="user-submit" onClick={() => this.props.deleteFollow(currentUser.id, userFollower.id)}>Following</button>
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