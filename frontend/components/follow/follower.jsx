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
    if (this.props.user.follower_ids) {
      debugger
      userFollowers = this.props.user.follower_ids.map(follower_id => {
        return (
          <p>{this.props.users[follower_id].username}</p>
        );
      }).reverse();
    }

    return (
      <div className="follower-container">
        {userFollowers}
      </div>
    );
  }
}

export default Follower;