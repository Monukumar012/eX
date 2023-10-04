import React, { useEffect,useState } from "react";
import "./VideosStyle.css";
import VideoContent from "./VideoContent.js";
import axios from 'axios';

const Latest = (props) => {
  // const videos = [
  //   {
  //     title: "First Video",
  //     url: "https://www.youtube.com/embed/kTJmO0gLPGY",
  //     videoId: "kTJmO0gLPGY",
  //   },
  //   {
  //     title: "First Video",
  //     url: "https://www.youtube.com/embed/kTJmO0gLPGY",
  //     videoId: "kTJmO0gLPGY",
  //   },
  //   {
  //     title: "First Video",
  //     url: "https://www.youtube.com/embed/kTJmO0gLPGY",
  //     videoId: "kTJmO0gLPGY",
  //   },
  //   {
  //     title: "First Video",
  //     url: "https://www.youtube.com/embed/kTJmO0gLPGY",
  //     videoId: "kTJmO0gLPGY",
  //   },
  //   {
  //     title: "First Video",
  //     url: "https://www.youtube.com/embed/kTJmO0gLPGY",
  //     videoId: "kTJmO0gLPGY",
  //   },
  //   {
  //     title: "First Video",
  //     url: "https://www.youtube.com/embed/kTJmO0gLPGY",
  //     videoId: "kTJmO0gLPGY",
  //   },
  // ];




  const [loading, setLoading] =  useState(true);
  const [videos, setVideos] = useState([]);


  async function fetchVideo(){
    try {
      const res = await axios.get(`http://localhost:8000/videos/${props.type}`);
      const data= res.data;
      if(data.success){
        // console.log(data);
        setVideos(data.videos);
        setLoading(false);
      }
    } catch (error) {
      setVideos([]);
    }
  }


  useEffect(()=>{
    fetchVideo();
  })



  return (
    <div className={props.cName}>
      <div className="videos-top">
        <h1>{props.heading}</h1>
      </div>

      {loading?(<div className="video-loader"><h2>Loading....</h2></div>) : videos.length===0 ? (<div className="video-loader" ><h2>Video Not Exists of this Category</h2></div>) :
        (<ul className="videos-bottom">
        {videos.map((video, ind) => {
          return (
            
              <VideoContent
                ind={ind}
                title={video.title}
                url={video.url}
              />
          );
        })}
      </ul>)
      }
    </div>
  );
};

export default Latest;
