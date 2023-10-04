import React from "react";
import './VideoContentStyle.css'
const VideoContent = ({url,title,ind}) => {



  function extractVideoId(url){
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/ \n]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    } else {
      return 'Invalid YouTube URL';
    }
  };


  return (

    <>
      <li key={ind} className="video">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${extractVideoId(url)}`}
          title={title}
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen = {true}
        ></iframe>
      </li>
    </>
  );
};

export default VideoContent;
