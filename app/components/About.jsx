import React from 'react';
import AboutTech from 'AboutTech';
import AboutVideo from 'AboutVideo';

var About = React.createClass({

  render: function () {
    const VIDEO_ID = 'BX0ClXp3JNE';

    const techs =   [
      {
        url: 'https://heroku.com/',
        title: 'HEROKU',
        img: 'https://softwareengineeringdaily.com/wp-content/uploads/2016/10/herokukafka.png',
        description: 'Heroku is a cloud Platform-as-a-Service that is used as a web application deployment model.'
      },
      {
        ulr: 'https://nodejs.org/',
        title: 'Node.js',
        img: 'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png',
        description: 'Node.js is cross-platform JavaScript runtime environment for developing applications.'
      },
      {
        url: 'https://facebook.github.io/react/',
        title: 'React',
        img: 'http://coenraets.org/present/react/img/react.png',
        description: 'React is an open-source JavaScript library for data rendered as HTML.'
      },
      {
        url: 'http://foundation.zurb.com/',
        title: 'ZURB Foundation 6',
        img: 'http://zurb.com/blog/system/images/1735/original/customizable-SASS.png',
        description: 'Foundation is a responsive front-end framework.'
      },
      {
        url: 'http://c9.io/',
        title: 'Cloud9 IDE',
        img: 'https://static.c9.io/nc-3.1.3298-54d0f754-wf/static/plugins/c9.profile/static/images/cloud9-logo.svg',
        description: 'Cloud9 IDE is an online integrated development environment.'
      },
      {
        url: 'https://openweathermap.org/',
        title: 'OpenWeatherMap',
        img: 'http://newweather.ru/images/weather/openweathermap.png',
        description: 'OpenWeatherMap is an online service that provides weather data'
      },
      {
        url: 'http://git-scm.com/',
        title: 'Git',
        img: 'https://git-for-windows.github.io/img/git_logo.png',
        description: 'Git is a version control system designed to handle everything.'
      },
      {
        url: 'https://www.udemy.com/the-complete-react-web-app-developer-course/',
        title: 'Udemy',
        img: 'https://www.udemy.com/staticx/udemy/images/v4/logo.jpg',
        description: 'The Complete React Web App Developer Course'
      }
    ];

    const techsList = techs.map(function (tech, index) {
      var {url, title, img, description} = tech;
      console.log(index);
      return (
        <div key={index} className="columns large-3 small-12 ">
          <AboutTech url={url} title={title} img={img} description={description}/>
        </div>
      );
    });

    function creatRows() {
      var rows = [];
      let i = 0;
      let k = 0;
      let n = techsList.length;
      let j = Math.ceil(n / 4);
      console.log(techsList);

      for (let i = 0; i < j; i++, k += 4 ) {
        debugger;
        rows.push((function() {
          let list = [];
          for (let l = k; l < (k + 4) && l < n; l++){
            list.push((function() {
              return (<div>{techsList[l]}</div>);
            })());
          }
          console.log(list);
            return  (
              <div className="row">
                {list}
              </div>
            );
          })());
      }
      console.log(rows);
      return rows;
    }

    console.log(About);
    return (
      <div className="text-center">
        <h1 className="page-title">About</h1>
        <p>
          This is a weather application
        </p>
        <h3>This application deployed with</h3>
          {creatRows()}
        <div className="row">


        </div>
        <div className="row" style={{marginTop: 100}}>
          <div className="columns large-12 small-12 ">
            <h3>How we make websites</h3>
            <AboutVideo videoId={VIDEO_ID}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = About;
