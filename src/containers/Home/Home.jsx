import React from "react";
import "./home.css";
import Botvec from '../../assets/homebottomvector.png'
import homevec from "../../assets/homevector.png";
const Home = () => {
  return (
    <div id="home">
      <div className="pagedots">
        {/* <video autoPlay muted loop src="https://videos.pexels.com/video-files/7568747/7568747-hd_1920_1080_25fps.mp4"></video> */}
        <div className="homeflex">
          <div className="vectorimg">
            <img src={homevec} alt="home vec" />
          </div>
          <div className="content">
            <h1>Welcome To <span>Creative Carts</span></h1>
            <p>Personalized, Customize your experience with our exotic Products,
              Unique Gifts and photo Printing services.</p>
            <button><a href="">Get Started</a></button>
          <div className="bottomvec"><img src={Botvec} alt="botvec"/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
