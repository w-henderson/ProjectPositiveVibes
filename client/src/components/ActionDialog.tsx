import React, { Component } from "react";
import "../styles/ActionDialog.scss";

const CATEGORIES = [
  {
    label: "Political Identity",
    key: "Q"
  },
  {
    label: "Unintended",
    key: "W"
  },
  {
    label: "PII",
    key: "E"
  },
  {
    label: "Aggravation",
    key: "R"
  },
  {
    label: "Spamming / Scamming",
    key: "T"
  },
  {
    label: "Habuku",
    key: "S"
  },
  {
    label: "Abuse of Play",
    key: "F"
  },
  {
    label: "Harassment",
    key: "G"
  },
  {
    label: "Hate",
    key: "Z"
  },
  {
    label: "Inappropriate Sharing",
    key: "X"
  },
  {
    label: "Dangerous Speech",
    key: "C"
  },
  {
    label: "Extremism",
    key: "V"
  },
  {
    label: "Criminal or Predatory",
    key: " "
  }
];

type Props = {
  visible: boolean;
  onAction: (label: string) => void;
}

type State = {
  highlighted?: string;
}

class ActionDialog extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      highlighted: undefined
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", e => {
      if (this.state.highlighted !== undefined) return;

      let key = e.key.toUpperCase();

      if (CATEGORIES.find(category => category.key === key)) {
        this.setState({
          highlighted: key
        })
      }
    });

    document.addEventListener("keyup", e => {
      this.setState({
        highlighted: undefined
      })

      let key = e.key.toUpperCase();
      let label = CATEGORIES.find(category => category.key === key)?.label;

      if (label) this.props.onAction(label);
    })
  }

  render() {
    return (
      <div className={this.props.visible ? "ActionDialog" : "ActionDialog hidden"}>
        <h2>Action Player</h2>

        <div>
          {CATEGORIES.map(category => <div
            onClick={() => this.props.onAction(category.label)}
            key={category.key}
            className={this.state.highlighted === category.key ? "highlighted" : undefined}>
            <span>{category.key !== " " ? category.key : "⎵"}</span>
            <span>{category.label}</span>
          </div>)}
        </div>
      </div>
    )
  }
}

export default ActionDialog;