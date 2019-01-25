import React from 'react';
import { Link } from 'react-router-dom';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', full_name: '', username: '', password: '', website: '', bio: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.props.removeErrors();
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.removeErrors();
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

          {/* <header class="header">
            <nav class="header-nav">

              <h1 class="header-logo">
                <Link to="/"><img src={window.header_logoURL} /></Link>
              </h1>

              <ul class="header-list">
                <li><a href="#">Explore</a></li>
                <li><a href="#">Activity</a></li>
                <li><a href="#">Profile</a></li>
              </ul>

            </nav>
          </header> */}

          <div className="user-form-box">
            <div className="user-form-nav">
              <span>{"Edit Profile"}</span>
            </div >

            <form onSubmit={this.handleSubmit} className="user-form">
              <h2 className="user-username-title">{this.props.username}</h2>
              <div className="user-input-container">
                <label for="name">Name</label>
                <input type="text"
                  value={this.state.full_name}
                  onChange={this.update('full_name')}
                  className="user-input"
                  name="name"
                />
                <label for="username">Username</label>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                  name="username"
                />
                <label for="website">Website</label>
                <input type="text"
                  value={this.state.website}
                  onChange={this.update('website')}
                  className="login-input"
                  name="website"
                />
                <label for="bio">Bio</label>
                <input type="text"
                  value={this.state.bio}
                  onChange={this.update('bio')}
                  className="login-input"
                  name="bio"
                />
                <label for="email">Email</label>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                  name="email"
                />
              </div>
              <div className="user-submit-box">
                <input className="user-submit" type="submit" value="Submit"
                  disabled={!this.state.username} />
              </div>
              {/* <div className="user-update-errors">{this.renderErrors()}</div> */}
            </form>
          </div>
        </div>
        <div className="login-bottom-links">
          <a href="https://github.com/maggiecs">GITHUB</a>
          <a href="https://www.linkedin.com/in/maggie-chen1">LINKEDIN</a>
        </div>
      </div>

    );
    return (<h1>hello</h1>)
  }
}

export default ProfileForm;