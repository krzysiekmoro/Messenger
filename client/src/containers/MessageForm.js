import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewMessage, fetchMessages } from "../store/actions/messages";
import { withRouter } from 'react-router';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  handleNewMessage = (e) => {
    e.preventDefault();
    this.props.postNewMessage(this.state.message)
    this.setState({ message: '' });
    this.props.fetchMessages();
  };

  render() {
    return (
      <form onSubmit={this.handleNewMessage} id="new-message">
        {this.props.errors.message && (
          <div className="card-panel red lighten-1">
            {this.props.errors.message.message}
          </div>
        )}
        <input
          type="text"
          className="input-field"
          placeholder="Aa"
          value={this.state.message}
          onChange={(e) => this.setState({ message: e.target.value })}
        ></input>
        <button type="submit">
          <i className="material-icons">send</i>
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors,
  };
}

MessageForm = withRouter(MessageForm);
export default connect(mapStateToProps, { postNewMessage, fetchMessages })(MessageForm);
