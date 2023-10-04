import React from "react";
import "./LibrarySectionStyle.css";
import { Link } from "react-router-dom";

const LibrarySection = () => {
  return (
    <div className="lib-main">
      <div className="lib-top">
        <h1>Category</h1>
      </div>
      <div className="lib-bottom">

        <Link to={"./motivational"}>Motivational</Link>
        <Link to={"./slow-vibes"}>Slow-Vibes</Link>
        <Link to={"./melodious"}>Melodious</Link>
        <Link to={"./hard"}>Hard</Link>
        <Link to={"./motivational"}>Under Rated</Link>
        <Link to={"./customize"}>Customize</Link>

      </div>
    </div>
  );
};

export default LibrarySection;
