import React, { useEffect ,useState} from "react";
import { useAnimation, motion, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import '../style/blogs.css'


const bgVariants={
    visible:{
        opacity:1, rotate: -5,transition:{type: "spring",diration:3 , delay:1}
    },
    hidden:{
        opacity:0 , rotate:0,transition:{diration:0.5 }
    }
    
    }
   const titleMotion = {
    hover:{
        y:-100
        
    }
   }
   const paraMotion={
    rest:{
        opacity:0
    },
    hover:{
        opacity:1,
        y:10,
        
    }
   }

const BlogCard = (props) => {
    const controls= useAnimation()
    const [ref , inView] = useInView()
    const [fav, setFav] = useState(false)
    useEffect(()=>{
        if(inView){
            controls.start('visible')
        }
        else{
            controls.start('hidden')
        }
       
    },[controls, inView])

    
    return (  
    
    <div className="blog-card"
      ><Link to={`blogs/${props.id}`}> 
           <motion.div className="card-body"
style={{backgroundImage: `url(${props.img})`,
backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat'
}
}   
whileHover='hover'
initial='rest'
animate='rest'   
transition={
   { duration:1, ease:'easein'}
}  
>
            
            <motion.div className="blog-title"
           variants={titleMotion}

           
            >
            <Typography variant="h3">
                {props.title}
            </Typography>
            </motion.div>
            <motion.div className="sub-title"
            variants={paraMotion}
            >
            <Typography variant="subtitle2" >
               {props.para}
            </Typography>

           

            <motion.div className="read-more"
               >
             
             
                <img src='images/readmore.svg'/>
                
           </motion.div>
           </motion.div>

           </motion.div>
           <motion.div className="bg"

           ref={ref}
            variants={bgVariants}
            initial="hidden"
            animate={controls}
           ></motion.div>
           </Link>
    </div>);
}
 
export default BlogCard