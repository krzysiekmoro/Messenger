import React from "react";
import { Link } from "react-router-dom";
import DefaultImage from "../images/default-profile.png";

const MessageItem = ({ text, username, profileImageUrl, sameUser }) => {
  if (!sameUser) {
    return (
      <div className={`message-start`}>
        <img
          src={profileImageUrl || DefaultImage}
          alt={username}
          height="50"
          width="50"
          className="card-image"
        />
        <div className="card-content">
          <Link id="card-username" to="/">
            {username}&nbsp;
          </Link>
          <div className="card">
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`message-end`}>
        <div className="card-content">
          <div className="card">
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default MessageItem;
