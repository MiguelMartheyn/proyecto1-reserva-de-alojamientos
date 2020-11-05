import React, { Component } from "react";

import "../index.css";

class Img extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="img">
          <img
            className="imagen"
            alt={this.props.imagen}
            src={this.props.imagen}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Img;