import React, { Component } from "react";
import "../styles/ChatLog.scss";

import Message from "./Message";

type Props = {
  messages: ChatMessage[];
  muted: string[];
}

type State = {
  hovered: boolean,
  scrolled: boolean
}

class ChatLog extends Component<Props, State> {
  oldMessages: ChatMessage[] = [];

  constructor(props: Props) {
    super(props);

    this.state = {
      hovered: false,
      scrolled: false
    }
  }

  componentDidMount() {
    let reportedElement = document.querySelector("div.Message.flagged");

    if (reportedElement) {
      reportedElement.scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center"
      });
    }

    setTimeout(() => {
      document.querySelector("div.ChatLog")!.addEventListener("scroll", () => this.setState({ scrolled: true }));
    }, 1000);
  }

  returnToNormal() {
    this.setState({ scrolled: false });

    let reportedElement = document.querySelector("div.Message.flagged")!;

    if (!reportedElement) return;

    reportedElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center"
    });
  }

  componentDidUpdate() {
    if (this.props.messages !== this.oldMessages) {
      this.oldMessages = this.props.messages;

      let reportedElement = document.querySelector("div.Message.flagged");

      if (reportedElement) {
        reportedElement.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center"
        });
      }

      setTimeout(() => {
        this.setState({
          scrolled: false,
          hovered: false
        })
      }, 100);
    }
  }

  render() {
    return (
      <>
        <div
          className="ChatLog"
          onMouseEnter={() => this.setState({ hovered: true })}
          onMouseLeave={() => this.setState({ hovered: false })}>
          {this.props.messages
            .filter(message => !this.props.muted.includes(message.author))
            .map(message => (
              <Message key={message.id} message={message} />
            ))}
        </div>

        <div className={`overlay${this.state.hovered || this.state.scrolled ? " disabled" : ""}`} />
      </>
    )
  }
}

export default ChatLog;