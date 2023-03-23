import React, { Component } from "react";
import "../styles/FilterControl.scss";

const supercell = require("../images/supercell-logo-white-transp.png");

type Props = {
  people: string[];
  muted: string[];
  threads: string[][];
  onMute: (person: string) => void;
  onUnmute: (person: string) => void;
  onMuteAll: () => void;
  onUnmuteAll: () => void;
}

class FilterControl extends Component<Props> {
  check(e: React.ChangeEvent<HTMLInputElement>, person: string) {
    if (e.target.checked) this.props.onUnmute(person);
    else this.props.onMute(person);
  }

  setAll(checked: boolean) {
    document.querySelectorAll("input[type=checkbox]").forEach(checkbox => {
      (checkbox as HTMLInputElement).checked = checked;
    });
  }

  render() {
    return (
      <div className="FilterControl">
        <img src={supercell} alt="OpenAI logo" />

        <h2>Threads of Conversation</h2>
        <h3>Powered by GPT-3</h3>

        <div className="buttons">
          <span onClick={() => { this.props.onUnmuteAll() }}>Show all</span>
          <span onClick={() => { this.props.onMuteAll() }}>Hide all</span>
        </div>

        <div className="list">
          {this.props.people.map(person => <div key={person}>
            <input
              type="checkbox"
              onChange={e => this.check(e, person)}
              checked={!this.props.muted.includes(person)} />
            <span>{person}</span>
          </div>)}
        </div>

        <h3 style={{ marginTop: 16 }}>Identified Threads</h3>

        <ul>
          {this.props.threads.map(thread => <li>
            {thread.join(", ")}
          </li>)}
        </ul>
      </div>
    )
  }
}

export default FilterControl;