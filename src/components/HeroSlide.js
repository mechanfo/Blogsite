import React from "react";
import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { motion ,AnimatePresence, animate } from "framer-motion";
import '../style/slide.css'


const slideVariants = {
  initial:{
    opacity:0,y:50
  },
  animate:{
    opacity:1,y:0
  }
}
const Slide = (props) => {
    return (
      <motion.div className="hero-blog-card spring-fever"
      variants={slideVariants}
      initial="initial"
      animate="animate"
      style={{backgroundImage: `url(${props.img})`,
backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat'
}
}  
      >
      <div className="title-content">
        <h3><a href="#">{props.title}</a></h3>
        <div className="intro"> <a href="#">Inspiration</a> </div>
      </div>
      <div class="card-info">
        {props.info}
        <a href="#">Read Article<span class="licon icon-arr icon-black"></span></a>
      </div>
      <div className="utility-info">
        <ul className="utility-list">
          <li><span className="licon icon-like"></span><a href="#">2</a></li>
          <li><span className="licon icon-com"></span><a href="#">12</a></li>
          <li><span className="licon icon-dat"></span>03 jun 2017</li>
          <li><span className="licon icon-tag"></span><a href="#">Photos</a>, <a href="#">Nice</a></li>
        </ul>
      </div>
      <div className="gradient-overlay"></div>
      <div className="color-overlay"></div>
    </motion.div>
    
    
    )
}
 
export default Slide;