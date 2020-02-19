const apiKey = "5b9d6a46384c18dca19e20ddd5d49ee4";

// FIX THIS - REVERT BACK WITHOUT ERROR THROW.
const WeatherApi = {
  search(location) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`
    )
      .then(response => {
        // console.log(response)
        return response.json();
      })

      .then(jsonResponse => {
        console.log(jsonResponse);

        // if COD not 200 (location not found)
        if (jsonResponse.cod !== "200") {
          console.log("not found");
          alert("Location not found");
          return [];
        }

        // working method to get information from Open Weather Api, will review this to find better way of working.
        var listed = jsonResponse.list;
        var temp = [];
        listed.forEach(function(e) {
          // console.log(e.main.temp);
          temp.push(e);
        });

        return temp.map(city => {
          return {
            id: city.dt,
            dttxt: city.dt_txt,
            temp: city.main,
            weather: city.weather[0],
            wind: city.wind
          };
        });
      });
  }
};

export default WeatherApi;
