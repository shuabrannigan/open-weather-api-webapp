import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ""
      // localShow: false
    };
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleLocationChange(e) {
    this.setState({ location: e.target.value });
  }

  handleSearch(e) {
    if (this.state.location !== "") {
      this.props.searchWeather(this.state.location);

      e.preventDefault();
    } else {

      // App was crashing when search field was closed alert added which prevents this.
      alert("input required");
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input
          className="search-input"
          onChange={this.handleLocationChange}
          required
        />
        <div className="search-button" onClick={this.handleSearch}>
          <p>Search</p>
        </div>
      </div>
    );
  }
}

export default SearchBar;
