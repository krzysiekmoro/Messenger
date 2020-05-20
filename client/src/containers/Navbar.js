import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../store/actions/auth";

class Navbar extends Component {
  logOut = (e) => {
    e.preventDefault();
    this.props.logOut();
  };
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <div className="brand-logo center">
              <Link to="/">
                {/* <img src={Logo} alt="Home" className="navbar-logo" /> */}
                <i className="material-icons" id="icon">mail_outline</i>
                <p className="right" id="brand-name">Messenger</p>
              </Link>
            </div>
            {this.props.currentUser.isAuthenticated ? (
              <ul className="right">
                <li>
                  <Link>New Message</Link>
                </li>
                <li>
                  <a onClick={this.logOut}>Log out</a>
                </li>
              </ul>
            ) : (
              <ul className="right">
                <li>
                  <Link to="/signup">Sign up</Link>
                </li>
                <li>
                  <Link to="signin">Log in</Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps, { logOut })(Navbar);
