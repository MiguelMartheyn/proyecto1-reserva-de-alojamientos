import React, { Component } from "react";

import "../index.css";
import Foto from "./Foto";

class Artist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-artista-foto">
          <Foto imagen={this.props.imagen} />
          <div className="artista">{this.props.artista}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Artist;