import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages } from "../store/actions/messages";
import MessageItem from "../components/MessageItem";

class MessageList extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }
  render() {
    const { messages, currentUser } = this.props;
    let messageList = messages.map((m) => {
      let sameUser = false
      if(currentUser.user.id == m.user._id){
        sameUser = true;
      }
      console.log(`Current user: ${currentUser.user.id}. 
      Message user: ${m.user._id}`)
      return(<MessageItem
        key={m._id}
        date={m.createdAt}
        text={m.text}
        username={m.user.username}
        profileImageUrl={m.user.profileImageUrl}
        sameUser={sameUser}
      />)
    });
    return messageList
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, { fetchMessages })(MessageList);
