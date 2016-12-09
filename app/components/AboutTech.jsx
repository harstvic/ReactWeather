import React from 'react';

var AboutTech = (props) => {
  var {url, title, img, description} = props;

  return (
    <div>
      <a href={url}>
        <h4>{title}</h4>
      </a>
      <div style={{height: 150}}>
        <img src={img} style={{height: 130}}/>
      </div>
      <p>{description}</p>
    </div>
  );
};

module.exports = AboutTech;
