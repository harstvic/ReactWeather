var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },

  handleSearch: function (location) {
    var that = this;

    that.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      })
    }, function (errorMessage) {
      that.setState({
        isLoading: false,
        location: '',
        temp: ''
      });
      alert(errorMessage);
    });
  },

  render: function () {
    var {isLoading, location, temp} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>
      } else if (location && temp) {
        debugger;
        console.log(<WeatherMessage temp={temp} location={location}/>);
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <div className="row">
          <WeatherForm onSearch={this.handleSearch}/>
        </div>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
