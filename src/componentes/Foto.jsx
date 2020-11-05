import React, { Component } from "react";

import "../index.css";

class Foto extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="foto-contenedor">
          <img
            className="foto"
            alt={this.props.imagen}
            src={this.props.imagen}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Foto;