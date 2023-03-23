import React, { Component } from "react";
import "./App.scss";

import ChatLog from "./components/ChatLog";
import Context from "./components/Context";

class App extends Component {
  render() {
    const messages = [
      {
        id: "1",
        content: "innocent message",
        author: "hogridaaa",
        timestamp: Date.now()
      },
      {
        id: "2",
        content: "another innocent message",
        author: "hogridaaa",
        timestamp: Date.now()
      },
      {
        id: "3",
        content: "racial slur",
        author: "xxdonaldtrumpxx",
        timestamp: Date.now(),
        flag: {
          category: "hate speech",
          severity: 6
        }
      },
      {
        id: "4",
        content: "hey not cool buddy",
        author: "hogridaaa",
        timestamp: Date.now()
      }
    ]

    return (
      <div className="App">
        <Context />

        <ChatLog messages={messages} />
        <div></div>

        <div className="Footer">
          press <strong>a</strong> to action or <strong>d</strong> to dismiss
        </div>
      </div>
    )
  }
}

export default App;