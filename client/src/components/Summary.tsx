import React, { Component } from "react";
import "../styles/Summary.scss";

type Props = {
  summary: string[];
}

class Summary extends Component<Props> {
  render() {
    return (
      <div className="Summary">
        <h2>Themes</h2>

        <ul>
          {this.props.summary.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Summary;