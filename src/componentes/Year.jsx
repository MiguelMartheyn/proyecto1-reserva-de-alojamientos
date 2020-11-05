import React, { Component } from "react";

import "../index.css";

class Year extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="year"> ({this.props.año})</div>
      </React.Fragment>
    );
  }
}

export default Year;
