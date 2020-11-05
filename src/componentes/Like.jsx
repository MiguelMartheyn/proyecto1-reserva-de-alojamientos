import React, { Component } from "react";

import "../index.css";
import megusta from "../componentes/megusta.jpg";
import nomegusta from "../componentes/nomegusta.png";

class Like extends Component {
  constructor(props) {
    super(props);
    this.state = { like: this.props.megusta };
  }
  handleLike = e => {
    this.setState({
      like: !this.state.like
    });
  };

  render() {
    const liked = (
      <img className="like" src={megusta} alt="{this.props.megusta}" />
    );
    const notLiked = (
      <img className="like" src={nomegusta} alt="{this.props.megusta}" />
    );
    let seleccion = this.state.like ? liked : notLiked;

    return (
      <React.Fragment>
        <div className="like-contenedor" onClick={this.handleLike}>
          <div className="seleccion">{seleccion}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Like;
