import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";

import { sliderSetting } from '../../utils/common';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Residencies = ()=> {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
           <div className="r-head flexColStart">
              <span className="orangrText">Best Choices</span>
              <span className="primaryText">Popular Residencies</span>
           </div>
           <Swiper {...sliderSetting}>
             <SliderButtons/>
              {data.map((card,i)=>(
                <SwiperSlide key={i}>
                   <div className="r-card">
                      <img src={card.image} alt="home" />
                       <span className="secondaryText  r-price">
                          <span style={{color: "orange"}}>$</span>
                           <span>{card.price}</span>
                       </span>
                        <span className="primaryText"> {card.name}</span>
                        <span className="secondaryText"> {card.detail}</span>
                   </div>
                </SwiperSlide>
              ))

              }
           </Swiper>
        </div>
    </section>
  )
}

export default Residencies;

const SliderButtons=()=>{
   const swiper =useSwiper();
   return(
     <div className="flexCenter r-button">
         <button onClick={()=>swiper.slidePrev()}><FaArrowLeft /></button>
         <button onClick={()=>swiper.slideNext()}><FaArrowRight /></button>
     </div>
   );
}
