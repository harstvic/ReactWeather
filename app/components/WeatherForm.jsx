var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e){
    e.preventDefault();

    var locationRef = this.refs.location;
    var location = locationRef.value;

    if (location.length) {
      locationRef.value = '';
      this.props.onSearch(location);
    }
  },

  render: function () {
    return (
      <div className="columns small-12 large-5 small-centered">
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location" placeholder="City Name" />
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
