import React from "react";
import "./LibrarySectionStyle.css";
import Single from "./Single.js";

const LibrarySection = () => {
  return (
    <div className="main">
      <div className="top">
        <h1>Category</h1>
      </div>
      <div className="bottom">
        <Single
          url="./motivational"
          imgurl="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          heading="Motivational"
          para="Rise above the challenges, reach for the stars, let the rhythm of determination guide your path. With each beat, you're a symphony of strength, creating your own masterpiece of success."
        />
        <Single
          url="./slow-vibes"
          imgurl="https://images.unsplash.com/photo-1421217336522-861978fdf33a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          heading="Slow-Vibes"
          para="Rise above the challenges, reach for the stars, let the rhythm of determination guide your path. With each beat, you're a symphony of strength, creating your own masterpiece of success."
        />
        <Single
          url="./hard-core"
          imgurl="https://images.unsplash.com/photo-1421217336522-861978fdf33a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          heading="Hard-Core"
          para="Rise above the challenges, reach for the stars, let the rhythm of determination guide your path. With each beat, you're a symphony of strength, creating your own masterpiece of success."
        />
        <Single
          url="./relaxing"
          imgurl="https://images.unsplash.com/photo-1421217336522-861978fdf33a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          heading="Relaxing"
          para="Rise above the challenges, reach for the stars, let the rhythm of determination guide your path. With each beat, you're a symphony of strength, creating your own masterpiece of success."
        />
        <Single
          url="./cutomize"
          imgurl="https://images.unsplash.com/photo-1421217336522-861978fdf33a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          heading="Customize"
          para="Rise above the challenges, reach for the stars, let the rhythm of determination guide your path. With each beat, you're a symphony of strength, creating your own masterpiece of success."
        />
        <Single
          url="./underrated"
          imgurl="https://images.unsplash.com/photo-1421217336522-861978fdf33a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          heading="Under Rated"
          para="Rise above the challenges, reach for the stars, let the rhythm of determination guide your path. With each beat, you're a symphony of strength, creating your own masterpiece of success."
        />
      </div>
    </div>
  );
};

export default LibrarySection;
