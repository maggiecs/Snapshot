import React from 'react';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.currentUser.id,
      email: this.props.currentUser.email, 
      full_name: this.props.currentUser.full_name, 
      username: this.props.currentUser.username, 
      website: '', 
      bio: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.removeErrors();
    const user = Object.assign({}, this.state);
    this.props.updateUser(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <div className="user-form-container">

          <div className="user-form-box">
            <div className="user-form-nav">
              <span>{"Edit Profile"}</span>
            </div >

            <form onSubmit={this.handleSubmit} className="user-form">
              <h2 className="user-username-title">{this.props.currentUser.username}</h2>
              <div className="user-input-container">
                <label htmlFor="name">Name
                <input type="text"
                  value={this.state.full_name}
                  onChange={this.update('full_name')}
                  className="user-input"
                  name="name"
                  /></label>
                <label htmlFor="username">Username
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="user-input"
                  name="username"
                  /></label>
                <label htmlFor="website">Website
                <input type="text"
                  value={this.state.website}
                  onChange={this.update('website')}
                  className="user-input"
                  name="website"
                  /></label>
                <label htmlFor="bio">Bio
                <input type="text"
                  value={this.state.bio}
                  onChange={this.update('bio')}
                  className="user-input"
                  name="bio"
                  /></label>
                <label htmlFor="email">Email
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="user-input"
                  name="email"
                  /></label>
              </div>
              <div className="user-submit-box">
                <input className="user-submit" type="submit" value="Submit"
                   />
              </div>
              {/* <div className="user-update-errors">{this.renderErrors()}</div> */}
            </form>
          </div>
        </div>
        <footer className="footer">
          <small className="footer-copy">
            &copy; 2019 SNAPSHOT
        </small>
          <ul className="login-bottom-links">
            <li><a href="https://github.com/maggiecs">GITHUB</a></li>
            <li><a href="https://www.linkedin.com/in/maggie-chen1">LINKEDIN</a></li>
          </ul>
        </footer>
      </div>
      

    );
  }
}

export default ProfileForm;