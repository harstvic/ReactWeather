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
      errorMessage: undefined,
      location: undefined,
      weather: undefined
    });

    openWeatherMap.getTemp(location).then(function (weather) {
      that.setState({
        isLoading: false,
        location: location,
        weather: weather
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },

  componentDidMount: function () {
    var location = this.props.location.query.location;

    if (location && location.length) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  componentWillReceiveProps: function(newProps) {
    var location = newProps.location.query.location;
    if (location && location.length) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  render: function () {
    var {isLoading, errorMessage, weather} = this.state;
    debugger;
    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>
      } else if (weather) {
        return <WeatherMessage weather={weather}/>;
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
        <h1 className="text-center page-title">Get Current Weather</h1>
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
