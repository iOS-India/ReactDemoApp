import React, { Component } from "react";
import { Bar } from "chart.js";

class Chaat extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="chaat">
        <Bar />
      </div>
    );
  }
}

export default Chaat;
