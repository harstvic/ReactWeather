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
          <input type="search" ref="location" placeholder="Search weather by city" />
          <button className="button expanded hollow">Get Current Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
