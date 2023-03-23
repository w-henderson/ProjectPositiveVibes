import React, { Component } from "react";
import "../styles/Insight.scss";

import Message from "./Message";

type Props = {
  insight: InsightData;
}

class Insight extends Component<Props> {
  render() {
    return (
      <div className="Insight">
        <h2>✨ Insight</h2>

        This report is similar to <strong>#{this.props.insight.similar}</strong>, which was marked as <strong>{this.props.insight.result}</strong>.

        <Message message={this.props.insight.message} />
      </div>
    )
  }
}

export default Insight;