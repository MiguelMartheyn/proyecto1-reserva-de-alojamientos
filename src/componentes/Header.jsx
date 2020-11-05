import React from "react";
import "../styles/styles.css";
import Filter from "./Filter";
import logo2 from "../images/logo2.png";


export default class Header extends React.Component {
  state = {
    textInicial: new Date().valueOf(),
    textFinal: new Date().valueOf() + 3456000000
  };

  render() {
    const filtros = (
      <Filter
        fechaInicial={this.state.textInicial}
        fechaFinal={this.state.textFinal}
        logo={logo2}
      />
    );
    return (
      <div>
        <div>{filtros}</div>
      </div>
    );
  }
}

