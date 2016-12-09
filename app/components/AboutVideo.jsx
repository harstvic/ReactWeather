import React from 'react';
import YouTube from 'react-youtube';

const VIDEO_ID = 'BX0ClXp3JNE';

class AboutVideo extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      videoId: VIDEO_ID,
      player: null
    };

    this.onReady = this.onReady.bind(this);
    this.onChangeVideo = this.onChangeVideo.bind(this);
    this.onPlayVideo = this.onPlayVideo.bind(this);
    this.onPauseVideo = this.onPauseVideo.bind(this);
  }

  onReady(event) {
    console.log(`YouTube Player object for VIDEO_ID: "${this.state.videoId}" has been saved to state.`);
    this.setState({player: event.target});
  }

  onPlayVideo() {
    this.state.player.playVideo();
  }

  onPauseVideo() {
    this.state.player.pauseVideo();
  }

  onChangeVideo() {
    this.setState({videoId: VIDEO_ID});
  }

  render () {
    return (
        <div className="flex-video widescreen">
          <YouTube videoId={this.state.videoId} onReady={this.onReady} />
        </div>
    );
  }
}

module.exports = AboutVideo;
