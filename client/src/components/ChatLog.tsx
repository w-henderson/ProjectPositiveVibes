import React, { Component } from "react";
import "../styles/ChatLog.scss";

import Message from "./Message";

type Props = {
  messages: ChatMessage[];
}

class ChatLog extends Component<Props> {
  render() {
    return (
      <div className="ChatLog">
        {this.props.messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
      </div>
    )
  }
}

export default ChatLog;