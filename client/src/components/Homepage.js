import React from "react";
import { Link } from "react-router-dom";
import MessageTimeline from './MessageTimeline';
import MessageForm from "../containers/MessageForm";

const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div className="home">
        <h1>Hello</h1>
        <h4>What's up?</h4>
        <Link to="/signup" className="waves-effect waves-light btn">
          Sign up
        </Link>
      </div>
    );
  }
  return (
    <div id="homepage">
      <MessageTimeline />
      <MessageForm />
    </div>
  );
};

export default Homepage;
