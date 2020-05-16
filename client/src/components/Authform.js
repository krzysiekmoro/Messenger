import React, { Component } from "react";

class Authform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      profileImageUrl: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
    this.props
      .onAuth(authType, this.state)
      .then(() => console.log("Logged in successfully"));
  };

  render() {
    const { email, username, password, profileImageUrl } = this.state;
    const { heading, buttonText, signUp } = this.props;
    return (
      <div>
        <div className="row justify-content-md-center text-center">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit}>
              <h2>{heading}</h2>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={this.handleChange}
                id="email"
                name="email"
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                onChange={this.handleChange}
                id="password"
                name="password"
              />
              {signUp && (
                <div>
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={this.handleChange}
                    id="username"
                    name="username"
                  />
                  <label htmlFor="image-url">Image URL:</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    id="image-url"
                    name="profileImageUrl"
                    value={profileImageUrl}
                  />
                </div>
              )}
              <button
                className="btn btn-primary btn-block btn-lg"
                type="submit"
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Authform;
