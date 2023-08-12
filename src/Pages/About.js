import React from 'react'
import "./About.css";
import abt from "../Assets/abt.jpg"
const About = () => {
  return (
<div className="about"  style={{ backgroundImage: `url(${abt})` }}>
      <div
        className="aboutTop"
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US:</h1>
        <p>
       <strong>Welcome to our Attendance Management System! We offer a seamless solution designed to streamline attendance tracking for organizations of all sizes. Our user-friendly interface and powerful features make it effortless to manage attendance records, monitor trends, and generate insightful reports. Say goodbye to manual processes and embrace efficiency with our reliable system</strong> </p>
      </div>
    </div>  )
}

export default About