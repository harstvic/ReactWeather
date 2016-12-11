import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

var ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Error'
    }
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function() {
    var {title, message} = this.props;

    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <button className="close-button" data-close="" arial-label="Close modal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    return (
      <div>
      </div>
    );
  }
});

module.exports = ErrorModal;
