import React from 'react';
import { Link } from 'react-router-dom';

class Following extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let userFollowings;
    if (this.props.user.followee_ids) {
      userFollowings = this.props.user.followee_ids.map(followee_id => {
        return (
          <p>{this.props.users[followee_id].username}</p>
        );
      }).reverse();
    }

    return (
      <div className="following-container">
        {userFollowings}
      </div>
    );
  }
}

export default Following;