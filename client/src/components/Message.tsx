import React, { Component } from "react";
import "../styles/Message.scss";

type Props = {
  message: ChatMessage;
}

class Message extends Component<Props> {
  render() {
    const sendDate = new Date(this.props.message.timestamp);
    const sendDateString = sendDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    return (
      <div className={`Message${this.props.message.flag !== undefined ? " flagged" : ""}`}>
        <div className="content">
          <div className="meta">
            <span>{this.props.message.author}</span>
            <span>{sendDateString}</span>
          </div>

          <div className="text">{this.props.message.content}</div>
        </div>

        {this.props.message.flag !== undefined && <div className="flag">
          <div>
            <span>Category:</span>
            <span>{this.props.message.flag.category}</span>
          </div>

          <div>
            <span>Severity:</span>
            <span>{this.props.message.flag.severity}</span>
          </div>
        </div>}
      </div>
    )
  }
}

export default Message;