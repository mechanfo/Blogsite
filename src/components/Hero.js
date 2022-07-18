import React, { useState } from "react";
import '../style/hero.css'
import Slide from "./HeroSlide";
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import { motion } from "framer-motion";
import blogs from "./data";


const length = blogs.length
const Hero = () => {
    const [slide,setSlide]= useState(0)
    const nextSlide = ()=>{
        if(slide==length-1){
            setSlide(0)
        }
        else{
            setSlide(slide+1)
        }
    }
const prevSlide= ()=>{
    if(slide==0)
    setSlide(length-1)
    else
    setSlide(slide-1)
}

    return ( 
        <div>
            <div className="slider">
                {/* <button className="slider-btn prev" onClick={prevSlide} > <ArrowBackTwoToneIcon/> </button> */}
            
                <div className="slider-bg">
                   <Slide key={blogs[slide].title} title={blogs[slide].title} info={blogs[slide].para0} img={blogs[slide].img}/>
                </div>
                {/* <div className="slider-btn nxt" onClick={prevSlide} > <ArrowForwardTwoToneIcon/>   </div> */}
                <div className="slider-controlls">
                <motion.div
              whileTap={{scale:0.9}}
            

                className="slider-btn prev" onClick={prevSlide} > <ArrowBackTwoToneIcon/> </motion.div>
                
                <motion.div
                
              whileTap={{scale:0.9}}
            

                className="slider-btn nxt" onClick={nextSlide} > <ArrowForwardTwoToneIcon/> </motion.div>
                </div>
                {/* <button className="slider-btn nxt" onClick={nextSlide}> <ArrowForwardTwoToneIcon/>  </button> */}
            </div>
   
        </div>
     );
}
 
export default Hero;