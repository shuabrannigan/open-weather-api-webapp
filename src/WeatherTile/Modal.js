import React from "react";
import "./Modal.css";

const k2c = temp => {
  let convert = 273.15;
  return Math.floor(temp - convert);
};

const convertMph = speed => {
  let convert = 2.237;
  return Math.floor(speed * convert);
};

class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <>
        <div className="modal" id="modal">
          <div className="modal-content">
            <h1>More Information</h1>
            <h2>{"Current Temp: " + k2c(this.props.temp.temp) + " °C"}</h2>
            <h2>{"Feels like: " + k2c(this.props.temp.feels_like) + " °C"}</h2>
            <h2>{"Humidity: " + this.props.temp.humidity + "%"}</h2>
            <h2>{"Weather: " + this.props.weather.description}</h2>
            <h2>
              {"Wind Speed: " + convertMph(this.props.wind.speed) + " mph"}
            </h2>

            <span className="close" onClick={this.onClose}>
              &times;
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
