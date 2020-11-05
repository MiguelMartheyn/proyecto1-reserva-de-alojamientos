import React, { Component } from "react";

import "../index.css";
export const RATING_UNO = 1;
export const RATING_DOS = 2;
export const RATING_TRES = 3;
export const RATING_CUATRO = 4;
export const RATING_CINCO = 5;

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = { total: this.props.rating };
  }

  esRatingMayor(totalRating, indiceEstrella) {
    return totalRating >= indiceEstrella;
  }

  setRating(calificacion) {
    this.setState({
      total: calificacion
    });
  }

  render() {
    const { total } = this.state;
    const classWithCheck = "fa fa-star checked c-pointer";
    const classWithNoCheck = "fa fa-star c-pointer";
    return (
      <React.Fragment>
        <div className="cuadro-calificacion">
          <div className="califica">
            <span className="titulo-califica">Calificación Albúm</span>
          </div>
          <div className="estrellas">
            <span
              className={
                this.esRatingMayor(total, RATING_UNO)
                  ? classWithCheck
                  : classWithNoCheck
              }
              onClick={() => this.setRating(RATING_UNO)}
            />
            <span
              className={
                this.esRatingMayor(total, RATING_DOS)
                  ? classWithCheck
                  : classWithNoCheck
              }
              onClick={() => this.setRating(RATING_DOS)}
            />
            <span
              className={
                this.esRatingMayor(total, RATING_TRES)
                  ? classWithCheck
                  : classWithNoCheck
              }
              onClick={() => this.setRating(RATING_TRES)}
            />
            <span
              className={
                this.esRatingMayor(total, RATING_CUATRO)
                  ? classWithCheck
                  : classWithNoCheck
              }
              onClick={() => this.setRating(RATING_CUATRO)}
            />
            <span
              className={
                this.esRatingMayor(total, RATING_CINCO)
                  ? classWithCheck
                  : classWithNoCheck
              }
              onClick={() => this.setRating(RATING_CINCO)}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Rating;
