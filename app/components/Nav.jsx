var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch(e) {
    e.preventDefault();

    var locationRef = this.refs.location;
    var location = locationRef.value;

    if (location.length) {
      locationRef.value = '';
      let encodedLocation = encodeURIComponent(location);
      window.location.hash = `#/?location=${encodedLocation}`;
    }
  },
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} to='/'>Get Weather</IndexLink>
            </li>
            <li>
              <Link activeClassName="active" activeStyle={{fontWeight: 'bold'}} to='/about'>About</Link>
            </li>
            <li>
              <Link activeClassName="active" activeStyle={{fontWeight: 'bold'}} to='/examples'>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="location" placeholder="Search weather by city"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
