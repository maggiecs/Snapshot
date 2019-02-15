// import React from 'react';
// import { Link } from 'react-router-dom';
// import ProfilePostItem from './profile_post_item';

// class MainProfile extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
   
//     };
//   }

//   componentDidMount() {
//     this.props.fetchUserPosts(this.props.currentUser.id);
//   }

//   renderNumPosts(numPosts) {
//     if (numPosts === 1) {
//       return (
//         <p><b>{numPosts} </b>post</p>
//       );
//     } else {
//       return (
//         <p><b>{numPosts} </b>posts</p>
//       );
//     }
//   }

//   renderNumFollowers(numFollowers) {
//     if (numFollowers === 1) {
//       return (
//         <p><b>{numFollowers} </b>follower</p>
//       );
//     } else {
//       return (
//         <p><b>{numFollowers} </b>followers</p>
//       );
//     }
//   }

//   renderNumFollowings(numFollowees) {
//     if (numFollowees === 1) {
//       return (
//         <p><b>{numFollowees} </b>following</p>
//       );
//     } else {
//       return (
//         <p><b>{numFollowees} </b>followings</p>
//       );
//     }
//   }


//   render() {
//     let userPosts;
//     let numPosts;
//     let numFollowers;
//     let numFollowees;

//     if (this.props.currentUser.post_ids) {
//       numPosts = this.props.currentUser.post_ids.length;
//       numFollowers = this.props.currentUser.follower_ids.length;
//       numFollowees = this.props.currentUser.followee_ids.length;
//       userPosts = this.props.currentUser.post_ids.map(post_id => {
//         return <ProfilePostItem key={post_id} post_id={post_id} posts={this.props.posts} openPostModal={() => this.props.openPostModal(post_id)}/>;
//       }).reverse();
//     } else {
//       numPosts = 0;
//     }

//     return (
//       <div className= "main-profile-container">
//         <div className="main-profile-header">
//           <div className="main-profile-header-photo">
//             <img src={this.props.currentUser.photoUrl} />
//           </div>
//           <div className="main-profile-header-body">
//             <div className="main-profile-header-top">
//               <h2>{this.props.currentUser.username}</h2>
//               <button><Link to="/accounts/edit">Edit Profile</Link></button>
//               <button className="logout-button" onClick={this.props.logout}>Log Out</button>
//             </div>
//             <div className="main-profile-header-middle">
//               {this.renderNumPosts(numPosts)}
//               {this.renderNumFollowers(numFollowers)}
//               {this.renderNumFollowings(numFollowees)}
//             </div>
//             <div className="main-profile-header-bottom">
//               <p><b>{this.props.currentUser.full_name}</b></p>
//               <p>{this.props.currentUser.bio}</p>
//               <p><b>{this.props.currentUser.website}</b></p>
//             </div>
//           </div>
//         </div>
//         <ul className="main-profile-photos">
//           {userPosts}
//         </ul>
//         <footer className="footer">
//           <nav className="login-bottom-nav">
//             <ul className="login-bottom-links">
//               <li><a href="https://github.com/maggiecs">GITHUB</a></li>
//               <li><a href="https://www.linkedin.com/in/maggie-chen1">LINKEDIN</a></li>
//             </ul>
//           </nav>
//           <small className="footer-copy">
//             &copy; 2019 SNAPSHOT
//         </small>
//         </footer>
//       </div>
//     );
//   }
// }

// export default MainProfile;