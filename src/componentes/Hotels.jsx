import React from "react";
import "../styles/styles.css";

export default class Hotels extends React.Component {
  render() {
    return (
      <div className="hotel">
        <div className="image">
          <img
            className="hotel-image"
            src={this.props.photo}
            alt={this.props.photo}
          />
        </div>
        <div className="hotel-content">
          <div className="name">{this.props.name}</div>
          <div className="description">{this.props.description}</div>

          <div className="city_country">
            {this.props.city}, {this.props.country}
          </div>
          <div className="rooms">
            <div className="room">{this.props.rooms} Habitaciones</div>
            <div className="prices">{this.props.price}</div>
          </div>
        </div>
        <div className="reservar">
          <button className="main_botton">Reservar</button>
        </div>
      </div>
      
    );
  }
}


