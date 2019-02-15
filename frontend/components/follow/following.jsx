import React from 'react';
import { Link } from 'react-router-dom';

class Following extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFolloweeFollows(this.props.user.id, "followees");
  }

  render() {
    let userFollowings;
    let user = this.props.user;
    let users = this.props.users;
    let currentUser = this.props.currentUser;
    if (user.followee_ids) {
      userFollowings = this.props.user.followee_ids.map(followee_id => {
        let userFollowee = users[followee_id];
        if (userFollowee) {
          if (!userFollowee.follower_ids.includes(currentUser.id)) {
            return (
              <div key={followee_id} className="follow-item">
                <img src={userFollowee.photoUrl} alt="" />
                <Link className="follow-item-username"
                  to={`/users/${userFollowee.id}`} onClick={() => this.props.closeModal()}>
                  <p>{userFollowee.username}</p>
                </Link>
                <button className="user-submit" onClick={() => this.props.createFollow({ followee_id: userFollowee.id, follower_id: this.props.currentUser.id })}>Follow</button>
              </div>
            );
          } else {
            return (
              <div key={followee_id} className="follow-item">
                <img src={userFollowee.photoUrl} alt="" />
                <Link className="follow-item-username"
                  to={`/users/${userFollowee.id}`} onClick={() => this.props.closeModal()}>
                  <p>{userFollowee.username}</p>
                </Link>
                <button className="user-submit" onClick={() => this.props.deleteFollow(currentUser.id, userFollowee.id)}>Following</button>
              </div>
            );
          }
        }
      }).reverse();
    }

    return (
      <div className="follow-container">
        <div className="follow-heading">Following</div>
          <ul className="follow-list-items">
            {userFollowings}
          </ul>
      </div>
    );
  }
}

export default Following;