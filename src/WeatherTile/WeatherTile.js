import React from "react";
import "./WeatherTile.css";
import Modal from "./Modal";
import "./Icons/Css/weather-icons.min.css"; // Github icons https://github.com/erikflowers/weather-icons

// Convert Kelvin to Celcius
const k2c = temp => {
  let convert = 273.15;
  return Math.floor(temp - convert);
};

class WeatherTile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    // this.onClose = this.onClose.bind(this);
  }
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <div className="tile-container">
 
        
        <h2 className="date">
          {this.props.date
            .split(" ")
            .shift()
            .split("-")
            .reverse()
            .join(" ")}
        </h2>
        {/* <div className="placeholder"></div> */}
        <i className={"wi wi-owm-" + this.props.weather.id}></i>
        <div className="info-container">
          <h3>{"Current Temp"}</h3>
          <h3>{k2c(this.props.temp.temp) + " °C"}</h3>

          <Modal
            temp={this.props.temp}
            weather={this.props.weather}
            wind={this.props.wind}
            show={this.state.show}
            onClose={this.showModal}
          />

          <button
            className="modal-btn"
            onClick={e => {
              this.showModal(e);
            }}
          >
            Information
          </button>
        </div>
      </div>
    );
  }
}

export default WeatherTile;
