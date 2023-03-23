import React, { Component } from "react";
import "./App.scss";

import ActionDialog from "./components/ActionDialog";
import ChatLog from "./components/ChatLog";
import Context from "./components/Context";
import FilterControl from "./components/FilterControl";
import Summary from "./components/Summary";

import data from "./data.json";

const newnham = require("./images/newnham.png");

type State = {
  report: Report,
  actioning: boolean,
  muted: string[]
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      report: data[0],
      actioning: false,
      muted: []
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", e => {
      if (e.key === "a") this.setState({ actioning: true });
      else if (e.key === "Escape") this.setState({ actioning: false });
      else if (e.key === "d") this.setState({ actioning: false });
    })
  }

  getInvolvedParties(): string[] {
    let involvedParties: string[] = [];

    for (let message of this.state.report.messages) {
      if (!involvedParties.includes(message.author)) {
        involvedParties.push(message.author);
      }
    }

    return involvedParties;
  }

  mute(person: string) {
    this.setState({
      muted: [...this.state.muted, person]
    })
  }

  unmute(person: string) {
    this.setState({
      muted: this.state.muted.filter(p => p !== person)
    })
  }

  nextReport() {
    this.setState({
      actioning: false,
      muted: []
    })
  }

  render() {
    const involvedParties = this.getInvolvedParties();

    return (
      <div className="App">
        <Context context={this.state.report.context} />

        <ChatLog
          messages={this.state.report.messages}
          muted={this.state.muted} />

        <FilterControl
          people={involvedParties}
          onMute={this.mute.bind(this)}
          onUnmute={this.unmute.bind(this)} />

        <Summary />

        <div className="Footer">
          press <strong>a</strong> to action or <strong>d</strong> to dismiss

          <img src={newnham} alt="Newnham College" />
        </div>

        <ActionDialog
          visible={this.state.actioning}
          onAction={this.nextReport.bind(this)} />
      </div>
    )
  }
}

export default App;