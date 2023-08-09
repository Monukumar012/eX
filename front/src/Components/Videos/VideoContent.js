import React from "react";
import './VideoContentStyle.css'
const VideoContent = (props) => {
  return (
    <>
      <li key={props.ind} className="video">
        <iframe
          width="100%"
          height="100%"
          src={props.src}
          title={props.titile}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen = "true"
        ></iframe>
      </li>
    </>
  );
};

export default VideoContent;
