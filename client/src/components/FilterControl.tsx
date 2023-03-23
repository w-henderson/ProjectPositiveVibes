import React, { Component } from "react";
import "../styles/FilterControl.scss";

const supercell = require("../images/supercell-logo-white-transp.png");

type Props = {
  people: string[];
  onMute: (person: string) => void;
  onUnmute: (person: string) => void;
}

class FilterControl extends Component<Props> {
  check(e: React.ChangeEvent<HTMLInputElement>, person: string) {
    if (e.target.checked) this.props.onUnmute(person);
    else this.props.onMute(person);
  }

  render() {
    return (
      <div className="FilterControl">
        <img src={supercell} alt="OpenAI logo" />

        <h2>Threads of Conversation</h2>
        <h3>Powered by GPT-3</h3>

        <div>
          {this.props.people.map(person => <div key={person}>
            <input
              type="checkbox"
              onChange={e => this.check(e, person)}
              defaultChecked={true} />
            <span>{person}</span>
          </div>)}
        </div>
      </div>
    )
  }
}

export default FilterControl;