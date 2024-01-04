import React from 'react'
import './hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import { motion } from 'framer-motion';
const Hero =()=> {
  return (
    <section className="hero-wrapper">
        <div className="padding innerWidth flexCenter hero-container">
           {/*left side*/}
            <div className='flexColStart hero-left'>
                <div className="hero-title">
                  <div className="orange-circle"/>
                   <motion.h1
                    initial={{y: " 2rem",opacity: 0 }}
                     animate ={{y: 0, opacity: 1}}
                      transition={{
                        duration:3,
                        type: "spring"
                      }}  >
                      Discover <br/>
                      Most Suitable <br/>
                      Property
                   </motion.h1>
                </div>
                <div className="flexColStart hero-des">
                    <span className="hero-span">Find a variety of properties that suit you very easilty</span>
                    <span className="hero-span"> Forget all difficulties in finding a residence for you</span>
                </div>
                <div className="search-bar flexCenter">
                     <HiLocationMarker color="var(--blue)" size={25}/>
                     <input type="text" />
                     <button className="button"> Search</button>
                </div>
                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                       <span>
                            <CountUp start={8800} end={9000} duration={5}/>
                            <span>+</span>
                       </span>
                        <span className="secondaryText">Premium Products</span>
                    </div>
                    <div className="flexColCenter stat">
                       <span>
                            <CountUp start={1920} end={2000} duration={5}/>
                            <span>+</span>
                       </span>
                        <span className="secondaryText">Premium Customers</span>
                    </div>
                    <div className="flexColCenter stat">
                       <span>
                            <CountUp end={28}/>
                            <span>+</span>
                       </span>
                        <span className="secondaryText">Wared Customers</span>
                    </div>
                </div>
            </div>
             {/*right side*/}
             <div className="flexCenter hero-right">
               
                   <motion.div
                    initial={{x: "7rem", opacity: 0}}
                    animate={{x: 0, opacity:1}}
                    transition={{
                        duration: 3,
                    }}
                      className="image-container ">
                         <img src="./hero-image.png" alt="not found"/>
                    </motion.div>
               </div>
            </div>
       </section>
     )
  }

export default Hero