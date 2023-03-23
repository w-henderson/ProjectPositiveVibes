import React, { Component } from "react";
import "../styles/Context.scss";

import HumanizeDate from "@videsk/humanize-date";

const coc = require("../images/coc_shield.png");

type Props = {
  context: ReportContext;
}

class Context extends Component<Props> {
  render() {
    const created = new Date(this.props.context.created);
    const lastSeen = new Date(this.props.context.lastSeen);

    return (
      <div className="Context">
        <h2>Report #{this.props.context.id}</h2>
        <h3>{this.props.context.user}</h3>

        <div className="metrics">
          <div>
            <span><img src={coc} alt="Clash of Clans shield" /></span>
            <span>game</span>
          </div>

          <div>
            <span>{this.props.context.reports}</span>
            <span>reports</span>
          </div>

          <div>
            <span>{this.props.context.averageGameTime}</span>
            <span>playtime</span>
          </div>
        </div>

        <div className="general">
          <div>
            <span>Account created:</span>
            <span>{new HumanizeDate().dates(Date.now(), created).ago("days")}</span>
          </div>

          <div>
            <span>Last seen:</span>
            <span>{new HumanizeDate().dates(Date.now(), lastSeen).ago("days")}</span>
          </div>
        </div>

        <div className="general">
          <div>
            <span>Device:</span>
            <span>{this.props.context.device}</span>
          </div>

          <div>
            <span>IP:</span>
            <span>{this.props.context.ip}</span>
          </div>
        </div>

        <div className="general">
          <div>
            <span>Alliance:</span>
            <span>{this.props.context.alliance}</span>
          </div>

          <div>
            <span>Alliance description:</span>

            <div>{this.props.context.allianceDescription}</div>
          </div>
        </div>

        <div className="general">
          <div>
            <span>Reporter:</span>
            <span>{this.props.context.reporter}</span>
          </div>

          <div>
            <span>Reporter reputation:</span>
            <span>{this.props.context.reporterReputation}%</span>
          </div>

          <div>
            <span>Reportee reputation:</span>
            <span>{this.props.context.reporteeReputation}%</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Context;