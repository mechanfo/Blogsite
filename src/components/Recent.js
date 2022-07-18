import BlogCard from "./Blogcard";
import blogs from "./data";
import '../style/recent.css'
import { Typography } from "@mui/material";

const Recent = () => {
    return ( <div className="recent-section" id="recent">

        <div className="title">
            <Typography variant="h3">
                RECENT BLOGS
            </Typography>
        </div>
        <div className="recent-blogs"  >
            {
                blogs.map((p)=>{
                  return( <div className="recent-card"><BlogCard title={p.title} img={p.img} para={p.para0}  id={p.id} /></div>)
                })
            }
        </div>
    </div> );
}
 
export default Recent;