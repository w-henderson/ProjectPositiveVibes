import React, { Component } from "react";
import "./App.scss";

import ActionDialog from "./components/ActionDialog";
import ChatLog from "./components/ChatLog";
import Context from "./components/Context";
import FilterControl from "./components/FilterControl";
import Insight from "./components/Insight";
import Summary from "./components/Summary";

import report2 from "./data/report_2_processed.json";
import report3 from "./data/report_3_processed.json";
import report6 from "./data/report_6_processed.json";

const newnham = require("./images/newnham.png");

type State = {
  reports: Report[],
  reportIndex: number,
  actioning: boolean,
  muted: string[]
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    const reports = [report2, report3, report6];

    this.state = {
      reports,
      reportIndex: 0,
      actioning: false,
      muted: []
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", e => {
      if (e.key === "a") this.setState({ actioning: true });
      else if (e.key === "Escape") this.setState({ actioning: false });
      else if (e.key === "d") this.nextReport();
    })
  }

  getInvolvedParties(): string[] {
    let involvedParties: string[] = [];

    for (let message of this.state.reports[this.state.reportIndex].messages) {
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
    let nextIndex = this.state.reportIndex + 1;
    if (nextIndex === this.state.reports.length) nextIndex = 0;

    this.setState({
      reportIndex: nextIndex,
      actioning: false,
      muted: []
    })
  }

  render() {
    const involvedParties = this.getInvolvedParties();

    return (
      <div className="App">
        <Context context={this.state.reports[this.state.reportIndex].context} />

        <ChatLog
          messages={this.state.reports[this.state.reportIndex].messages}
          muted={this.state.muted} />

        <FilterControl
          people={involvedParties}
          muted={this.state.muted}
          threads={this.state.reports[this.state.reportIndex].context.threads}
          onMute={this.mute.bind(this)}
          onUnmute={this.unmute.bind(this)}
          onMuteAll={() => this.setState({ muted: this.getInvolvedParties() })}
          onUnmuteAll={() => this.setState({ muted: [] })} />

        <Summary summary={this.state.reports[this.state.reportIndex].context.summary} />

        <Insight insight={this.state.reports[this.state.reportIndex].context.insight} />

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