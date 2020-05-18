import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const MessageItem = ({ date, text, username, profileImageUrl }) => (
  <div>
    <img
      src={profileImageUrl}
      alt={username}
      height="100"
      width="100"
      className="timeline-image"
    />
    <div className="message-area">
      <Link to="/">{username}&nbsp;</Link>
      <span>
        <Moment className="text-muted" format="DD MM YYYY">
          {date}
        </Moment>
      </span>
      <p>{text}</p>
    </div>
  </div>
);

export default MessageItem;
