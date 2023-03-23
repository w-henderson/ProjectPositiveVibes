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
      },
      {
        id: "5",
        content: "please give me troops for clan war i need more troops thank you very much",
        author: "xxdonaldtrumpxx",
        timestamp: Date.now()
      }
    ];

    const context = {
      id: "12345678",
      user: "xxdonaldtrumpxx",
      reports: 2,
      game: "Clash of Clans",
      alliance: "trump tower clan",
      allianceDescription: "make clash great again 🛡️\njoin us if you want to win clan wars against joe biden (we hate him)",
      created: new Date(2020, 1, 1).getTime(),
      lastSeen: Date.now(),
      device: "iPhone 13 Pro Max",
      ip: "123.123.123.123",
      averageGameTime: 23
    };

    return (
      <div className="App">
        <Context context={context} />

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