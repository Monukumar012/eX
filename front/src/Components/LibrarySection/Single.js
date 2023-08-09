import React from "react";
import "./SingleStyle.css";
import {Link} from 'react-router-dom';

const Single = (props) => {
  return (
    <>
      <div className="bottom-1">
        <div className="image">
          <img alt="jpg" src={props.imgurl} />
        </div>
        <div className="content">
          <div className="content-top">
            <Link to={props.url}>
              <h1>{props.heading}</h1>
            </Link>
          </div>
          <div className="content-bottom">
            <p>{props.para}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Single;
