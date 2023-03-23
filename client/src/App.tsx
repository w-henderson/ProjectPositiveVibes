import React, { Component } from "react";
import "./App.scss";
import ActionDialog from "./components/ActionDialog";

import ChatLog from "./components/ChatLog";
import Context from "./components/Context";

import data from "./data.json";

type State = {
  actioning: boolean
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      actioning: false
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", e => {
      if (e.key === "a") this.setState({ actioning: true });
      else if (e.key === "Escape") this.setState({ actioning: false });
      else if (e.key === "d") this.setState({ actioning: false });
    })
  }

  render() {
    return (
      <div className="App">
        <Context context={data[0].context} />

        <ChatLog messages={data[0].messages} />
        <div></div>

        <div className="Footer">
          press <strong>a</strong> to action or <strong>d</strong> to dismiss
        </div>

        <ActionDialog
          visible={this.state.actioning}
          onAction={() => this.setState({ actioning: false })} />
      </div>
    )
  }
}

export default App;