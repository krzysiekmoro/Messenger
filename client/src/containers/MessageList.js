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
      let justifyContent = "start"
      if(currentUser.user.id == m.user._id){
        justifyContent = "end";
      }
      console.log(`Current user: ${currentUser.user.id}. 
      Message user: ${m.user._id}`)
      return(<MessageItem
        key={m._id}
        date={m.createdAt}
        text={m.text}
        username={m.user.username}
        profileImageUrl={m.user.profileImageUrl}
        currentUser={currentUser}
        user={m.user.id}
        justifyContent={justifyContent}
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
