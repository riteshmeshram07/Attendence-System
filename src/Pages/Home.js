import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css";
import BannerImage from "../Assets/back.jpg";
// import Svg from "../Assets/svg.png"
const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> <strong>Efficient Attendance Management</strong> </h1>
        <p><b> Simplify Attendance Tracking with Our Intuitive and Reliable System</b></p>
        <Link to="/attendence">
          <button> Mark Attendence </button>
        </Link>
        {/* <Link to="/attendence">
        <img src={Svg} />
        </Link> */}
     
      </div>
    </div>  )
}

export default Home