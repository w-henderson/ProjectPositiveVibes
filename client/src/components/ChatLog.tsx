import React, { Component } from "react";
import "../styles/ChatLog.scss";

import Message from "./Message";

type Props = {
  messages: ChatMessage[];
}

type State = {
  hovered: boolean,
  scrolled: boolean
}

class ChatLog extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hovered: false,
      scrolled: false
    }
  }

  componentDidMount() {
    let reportedElement = document.querySelector("div.Message.flagged")!;
    reportedElement.scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center"
    });

    setTimeout(() => {
      document.querySelector("div.ChatLog")!.addEventListener("scroll", () => this.setState({ scrolled: true }));
    }, 100);
  }

  returnToNormal() {
    this.setState({ scrolled: false });

    let reportedElement = document.querySelector("div.Message.flagged")!;
    reportedElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center"
    });
  }

  render() {
    return (
      <>
        <div
          className="ChatLog"
          onMouseEnter={() => this.setState({ hovered: true })}
          onMouseLeave={() => this.setState({ hovered: false })}>
          {this.props.messages.map(message => (
            <Message key={message.id} message={message} />
          ))}
        </div>

        <div className={`overlay${this.state.hovered || this.state.scrolled ? " disabled" : ""}`} />
      </>
    )
  }
}

export default ChatLog;