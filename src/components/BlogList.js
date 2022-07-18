import { Grid, Typography } from "@mui/material";
import React from "react";
import BlogCard from "./Blogcard";
import '../style/blogs.css'
import blogs from "./data";



const BlogList = () => {
    return ( 
        <div className="blog-list" id="blog-list">
                <Grid  spacing={5} container 
                sx={
                 {
                        margin:'0 auto'
                    }
                }
                >
                    {
                            blogs.map((p)=>{
                                return(
                                    <Grid  item key={p.id}> 
                        <BlogCard title={p.title} img={p.img} para={p.para0}  id={p.id}/>

                    </Grid>
                                )
                            })
                    }
                    
                </Grid>
                
        </div>
     );
}



 
export default BlogList;