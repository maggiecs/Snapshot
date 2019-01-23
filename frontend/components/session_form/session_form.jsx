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
        <h1>Snapshot</h1>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-form">
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username"
                name="uname"
              />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
                name="psw"
              />
            

            <input className="session-submit" type="submit" value={this.props.formType} />
            <input className="session-submit" type="submit" value="Demo Log In" onClick={this.handleDemoSubmit} />
            {this.renderErrors()}
          </div>
        </form>

        <div className="login-alt-box">
          <span>Don't have an account?</span> <span>{this.props.altLink}</span>
        </div >

      </div>
    );
  }
}

export default SessionForm;