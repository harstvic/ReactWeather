var React = require('react');
const OPEN_WEATHER_ICON = 'http://openweathermap.org/img/w/';

var WeatherMessage = React.createClass({
  render: function () {
    debugger;
    var weather = this.props.weather;
    var location = weather.name;
    var {temp}  = weather.main;
    var {icon} = weather.weather[0];
    const imgSrc = `${OPEN_WEATHER_ICON}${icon}.png`;

    return (
      <div>
        <h3 className="text-center">
          <img src={imgSrc} alt=""/> It's it {temp} in {location}.
        </h3>
      </div>
    );
  }
});

module.exports = WeatherMessage;
