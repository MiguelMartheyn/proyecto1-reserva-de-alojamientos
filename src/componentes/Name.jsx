import React, { Component } from "react";

import "../index.css";
import Like from "./Like";

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-name-like">
          <Like megusta={this.props.megusta} />
          <div className="name"> {this.props.nombre}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Name;