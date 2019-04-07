import React from "react";
import ReactPlayer from "react-player";
import play from "../assets/Play.svg";

class VideoPlayer extends React.Component {
  state = { isPlaying: false };

  playVideo = () => {
    this.setState({ isPlaying: !this.state.isPlaying });
  };
  render() {
    const { isPlaying } = this.state;
    return (
      <div className="no-hover">
        {isPlaying ? (
          <div onClick={this.playVideo} className="player-overlay" />
        ) : (
          <img onClick={this.playVideo} src={play} alt="play" />
        )}
        <ReactPlayer
          url={this.props.videoUrl}
          playing={isPlaying}
          width="350px"
          controls={false}
        />
      </div>
    );
  }
}
export default VideoPlayer;
