var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div className="columns medium-10 large-8 small-centered">
      <h1 className="text-center">Examples</h1>
      <p>Here are a few examples locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Kiev'>Kiev</Link>
        </li>
        <li>
          <Link to='/?location=Lviv'>Lviv</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
