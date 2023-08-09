import React from 'react'
import './HeroStyle.css'
// import { Link } from 'react-router-dom'

const Hero = (props) => {
  return (
    <>
      <div className={props.cName}>
        <img
          alt={props.alt}
          src={props.url}
        />

        <div className={props.textClass}>
          <h1>
            {props.heading}
          </h1>
          {/* <p>
            {props.para}
          </p> */}
          {/* <Link to='/service' className={props.btnClass}>{props.btnText}</Link> */}

        </div>
      </div>
    </>
  )
}

export default Hero