import React, { Component } from "react";
import "../styles/Summary.scss";

type Props = {
  summary: string;
}

class Summary extends Component<Props> {
  render() {
    return (
      <div className="Summary">
        <h2>Summary</h2>
        <h3>Powered by GPT-3</h3>

        {this.props.summary}
      </div>
    )
  }
}

export default Summary;