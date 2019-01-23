import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  componentDidMount() {
    this.props.removeErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.removeErrors();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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

  handleDemoSubmit(e) {
    e.preventDefault();

    this.props.processForm({
      username: 'Photographer',
      password: 'landscape'
    })
  }
  
  render() {
    // const signUpOption = <span>Don't have an account?</span> <span>{this.props.altLink}</span>;
    // const logInOption = <span> Have an account?</span> <span>{this.props.altLink}</span>;
    // const altOption =  ? signUpOption : logInOption;
    
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to Snapshot!!!
          <br />
          Please {this.props.formType}
          <br />
        
          <br />

          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username"
              />
            </label>
            <br />
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
            </label>
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
            <input className="session-submit" type="submit" value="Demo Log In" onClick={this.handleDemoSubmit} />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;