var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
import ErrorModal from 'ErrorModal';

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },

  handleSearch: function (location) {
    var that = this;

    that.setState({
      isLoading: true,
      errorMessage: undefined
    });
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        location: '',
        temp: '',
        errorMessage: e.message
      });
    });
  },

  render: function () {
    var {isLoading, location, temp, errorMessage} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>
      } else if (location && temp) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <div className="row">
          <WeatherForm onSearch={this.handleSearch}/>
        </div>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
