import React, { useRef, useState } from "react";
import { useEffect } from "react";
import blogs from "../components/data";
import '../style/Blogpage.css'
import _ from "lodash";
const BlogPage = (props) => {
    const blog = _.find(blogs,{id:props.id})
     const handleScroll = ()=>{
      
    }
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    //   }, [])
    return ( <div className="blog-page">

        <div className="side-nav">
            <ul className="nav-list">
                <h3>Contents</h3>
                {  
                   blog.body.map((p)=>{
                        return(
                            <li className="side-nav-list-item " key={p.subtitle} ><a href={"#"+`${p.subtitle}`}  >{p.subtitle}  </a></li>
                        )
                    })
                }
            </ul>
        </div>

        <div className="content" onScroll={handleScroll}>
            <div className="title-block">
                <h1 className="main-title">{blogs[props.id].title}</h1>
                <img className="main-img"/>
                <p className="main-para"> {blogs[props.id].para0}</p>
            </div>
            {blog.body.map((p)=>{
                return(
            <div className="sub-block" key={p.subtitle}>
                <h3 id={p.subtitle} className="">{p.subtitle}</h3>
                <img className="sub-img"/>
                <p className="sub-para">{p.subPara}</p>
            </div>
                )
            })}
            <div className="bottom-spacing">
                
            </div>
        </div>

    </div> );
}
 
export default BlogPage;