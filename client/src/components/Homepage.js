import React from "react";
import { Link } from "react-router-dom";

const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div className="home">
        <h1>Hello</h1>
        <h4>What's up?</h4>
        <Link to="/signup" className="btn btn-primary">
          Sign up
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h1>You're logged in!</h1>
    </div>
  );
};

export default Homepage;
