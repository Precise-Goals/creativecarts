import React from "react";
import "./data.css";
import "./offer.css";
import camoffer1 from "../../assets/camerahomepage.png";
import giftoffer1 from "../../assets/Gifthomepage.png";
import camoffer2 from "../../assets/camerahomepage.png";
import giftoffer2 from "../../assets/Gifthomepage.png";
import { FRAMEOFFERS } from "./frame";
import { GIFTOFFERS } from "./gift";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const PDTs = () => {
  return (
    <div id="Products">
      <div className="overlay">
        <div className="background1">
          <img src={camoffer1} alt="camoffer1" />
        </div>
        <div className="background2">
          <img src={giftoffer1} alt="giftoffer1" />
        </div>
        <div className="framecontent">
          <div className="frametitle">
            <h1>latest Offers on Frames</h1>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Pagination,Autoplay]}
            className="mySwiper"
          >
            <div className="contain framescreening">
              {FRAMEOFFERS.map((frame, ind) => {
                return (
                  <SwiperSlide>
                    <div className="flexbox" key={ind}>
                      <div className="productscreening">
                        <img
                          className="imgdiv"
                          src={frame.productimage}
                          alt={frame.productname}
                        />
                        <div className="informationdiv">
                          <div className="infodiv">
                            <h1>{frame.productname}</h1>
                            <p>{frame.productdesc}</p>
                          </div>
                          <div className="cls">
                            <button className="pricebtn">
                              <a href="/">
                                <p>
                                  <span>-₹{frame.originalprice}/-</span> ₹
                                  {frame.price}
                                  /-
                                </p>
                              </a>
                            </button>
                            <button className="shopbtn">
                              <a href="/">Explore more Frames !</a>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
        <div className="background3">
          <img src={camoffer2} alt="camoffer2" />
        </div>
        <div className="productcontent">
          <div className="producttitle">
            <h1>Latest Offers on Gifts</h1>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={0}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination,Autoplay]}
            className="mySwiper"
          >
            <div className="certain tscreening">
              {GIFTOFFERS.map((g, key) => {
                return (
                  <SwiperSlide style={{margin:"0"}}>
                    <div className="flex" key={key}>
                      <div className="screening">
                        <div className="giftcontent">
                          <img className="productimg" src={g.productimage} />
                          <div className="name">
                            <h4>{g.productname}</h4>
                          </div>
                          <button className="pricebtn2">
                            <a href="#">
                              <p>
                                <span>₹ {g.originalprice}/-</span> ₹ {g.price}/-
                              </p>
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
          <button className="shopbtn" style={{ bottom: "0rem", margin: "0" }}>
            <a href="#">Best Selling Products !</a>
          </button>
          <div className="background4">
            <img src={giftoffer2} alt="giftoffer2" />
          </div>
        </div>
      </div>
    </div>
  );
};
