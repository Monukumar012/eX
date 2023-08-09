import React from "react";
import "./VideosStyle.css";
import VideoContent from "./VideoContent.js";

const Latest = (props) => {
  const videos = [
    {
      titile: "First Video",
      url: "https://www.youtube.com/embed/kTJmO0gLPGY",
      videoId: "kTJmO0gLPGY",
    },
    {
      titile: "First Video",
      url: "https://www.youtube.com/embed/kTJmO0gLPGY",
      videoId: "kTJmO0gLPGY",
    },
    {
      titile: "First Video",
      url: "https://www.youtube.com/embed/kTJmO0gLPGY",
      videoId: "kTJmO0gLPGY",
    },
    {
      titile: "First Video",
      url: "https://www.youtube.com/embed/kTJmO0gLPGY",
      videoId: "kTJmO0gLPGY",
    },
    {
      titile: "First Video",
      url: "https://www.youtube.com/embed/kTJmO0gLPGY",
      videoId: "kTJmO0gLPGY",
    },
    {
      titile: "First Video",
      url: "https://www.youtube.com/embed/kTJmO0gLPGY",
      videoId: "kTJmO0gLPGY",
    },
  ];

  return (
    <div className={props.cName}>
      <div className="videos-top">
        <h1>{props.heading}</h1>
      </div>

      <ul className="videos-bottom">
        {videos.map((video, ind) => {
          return (
            
              <VideoContent
                ind
                title={video.title}
                src={video.url}
              />
          );
        })}
      </ul>
    </div>
  );
};

export default Latest;
