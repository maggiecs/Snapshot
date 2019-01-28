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
      bio: '',
      photoFile: null,
      photoUrl: this.props.currentUser.photoUrl};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('user[id]', this.state.id);
    formData.append('user[email]', this.state.email);
    formData.append('user[full_name]', this.state.full_name);
    formData.append('user[username]', this.state.username);
    formData.append('user[website]', this.state.website);
    formData.append('user[bio]', this.state.bio);
    if (this.state.photoFile) {
      formData.append('user[photo]', this.state.photoFile);
    }
     // this.props.removeErrors();
    // const user = Object.assign({}, this.state);
    this.props.updateUser(formData);
    
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {

      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    return (
      <div className="user-form-container">
        <div className="user-form-box">
          <div className="user-form-nav">
            <span>{"Edit Profile"}</span>
          </div >

          <form onSubmit={this.handleSubmit} className="user-form">
            <div className="edit-profile-picture">
              <img src={this.state.photoUrl} />
              <div className="edit-picture-button">
                <h2 className="user-username-title">{this.props.currentUser.username}</h2>
                <label htmlFor="edit-file-upload" className="profile-file-upload">
                  Change Profile Photo
                </label>
                <input
                  id="edit-file-upload"
                  type="file"
                  onChange={this.handleFile}
                />
              </div>
            </div>
            <div className="user-input-container">
              <div className="user-name-input">
                <label htmlFor="name">Name</label>
                <input type="text"
                  value={this.state.full_name}
                  onChange={this.update('full_name')}
                  className="user-input"
                  name="name"
                  />
              </div>
              <div className="user-username-input">
                <label htmlFor="username">Username</label>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="user-input"
                  name="username"
                  />
              </div>
              <div className="user-username-website">
                <label htmlFor="website">Website</label>
                <input type="text"
                  value={this.state.website}
                  onChange={this.update('website')}
                  className="user-input"
                  name="website"
                  />
              </div>
              <div className="user-username-bio">
                <label htmlFor="bio">Bio</label>
                <textarea value={this.state.bio}
                  onChange={this.update('bio')}
                  className="user-input"
                  name="bio"></textarea>
              </div>
              <div className="user-username-email">
                <label htmlFor="email">Email</label>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="user-input"
                  name="email"
                  />
              </div>
            </div>
            <div className="user-submit-box">
              <input className="user-submit" type="submit" value="Submit"
                  />
            </div>
            {/* <div className="user-update-errors">{this.renderErrors()}</div> */}
          </form>
        </div>
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

export default ProfileForm;