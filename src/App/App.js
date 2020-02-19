import React from 'react';
import '../App/App.css';

import WeatherApi from '../Util/WeatherApi'

import WeatherContainer from '../WeatherContainer/WeatherContainer';
import SearchBar from '../SearchBar/SearchBar';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 

      city: [],
      
                 };
    
    this.searchWeather = this.searchWeather.bind(this);
  
  }

  
  

 

  searchWeather(location) {

      WeatherApi.search(location).then((city) => {
        this.setState({city: city})
      });
  
    
  }
  
  render() {
  return(
    <div className="App">
      <h1 className ="page-title">Weather <span>App</span></h1>
      <SearchBar searchWeather={this.searchWeather} local={this.state.localShow} handle={this.showModal} />
      <WeatherContainer city={this.state.city} local={this.state.localShow}/>


     
      
    </div>
  )
}
}

export default App;
