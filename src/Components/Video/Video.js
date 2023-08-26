// VideoComponent.js
import React from "react";
import ReactPlayer from "react-player";
import "./Video.css";

const Video = ({ videoUrl, caption, username, likes }) => {
  return (
    <div className="video-wrapper">
      <div className="video">
        <ReactPlayer
          url="https://youtube.com/shorts/efgyVJkzYYI?feature=share"
          width="320px"
          height="400px"
        />
      </div>
      <div className="video">
        <ReactPlayer
          url="https://youtube.com/shorts/efgyVJkzYYI?feature=share"
          width="320px"
          height="400px"
        />
      </div>
      <div className="video">
        <ReactPlayer
          url="https://youtube.com/shorts/efgyVJkzYYI?feature=share"
          width="320px"
          height="400px"
        />
      </div>
      <div className="video">
        <ReactPlayer
          url="https://youtube.com/shorts/efgyVJkzYYI?feature=share"
          width="320px"
          height="400px"
        />
      </div>
      <div className="video">
        <ReactPlayer
          url="https://youtube.com/shorts/efgyVJkzYYI?feature=share"
          width="320px"
          height="400px"
        />
      </div>
      <div className="video">
        <ReactPlayer
          url="https://youtube.com/shorts/efgyVJkzYYI?feature=share"
          width="320px"
          height="400px"
          controls
        />
      </div>
    </div>
  );
};

export default Video;
