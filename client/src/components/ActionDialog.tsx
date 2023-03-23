import React, { Component } from "react";
import "../styles/ActionDialog.scss";

const CATEGORIES = [
  {
    label: "GENERAL_RISK",
    key: "S"
  }, {
    label: "BULLYING",
    key: "Q"
  }, {
    label: "VIOLENCE",
    key: "W"
  }, {
    label: "RELATIONSHIP_SEXUAL_CONTENT",
    key: "E"
  }, {
    label: "VULGARITY",
    key: "R"
  }, {
    label: "DRUGS_ALCOHOL",
    key: "Z"
  }, {
    label: "IN_APP",
    key: "X"
  }, {
    label: "ALARM",
    key: "C"
  }, {
    label: "FRAUD",
    key: "V"
  }, {
    label: "HATE_SPEECH",
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

        {CATEGORIES.map(category => <div
          onClick={() => this.props.onAction(category.label)}
          key={category.key}
          className={this.state.highlighted === category.key ? "highlighted" : undefined}>
          <span>{category.key !== " " ? category.key : "⎵"}</span>
          <span>{category.label}</span>
        </div>)}
      </div>
    )
  }
}

export default ActionDialog;