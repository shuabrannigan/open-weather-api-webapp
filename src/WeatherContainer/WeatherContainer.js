import React from "react";
import "./WeatherContainer.css";
import WeatherTile from "../WeatherTile/WeatherTile";

class WeatherContainer extends React.Component {
  render() {
    return (
      <>
        <div className="weather-container">
          {this.props.city.map(city => {
            // if statement to prevent displaying all 40 list items
            if (city.dttxt.includes("15:00:00")) {
              return (
                <WeatherTile
                  key={city.id}
                  temp={city.temp}
                  weather={city.weather}
                  wind={city.wind}
                  date={city.dttxt}
                />
              );
            } else {
              console.log("no results");
            }
          })}
        </div>
      </>
    );
  }
}

export default WeatherContainer;
