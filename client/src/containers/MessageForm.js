import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewMessage } from "../store/actions/messages";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  handleNewMessage = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleNewMessage} id="new-message">
        {this.props.errors.message && (
          <div className="card-panel red lighten-1">{this.props.errors.message}</div>
        )}
        <input type="text" className="input-field" placeholder="Aa"></input>
        <button type="submit"><i className="material-icons">send</i></button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors,
  };
}

export default connect(mapStateToProps, { postNewMessage })(MessageForm);
