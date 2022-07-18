import React from "react";
import Hero from "../components/Hero";
import { ThemeProvider } from "@mui/system";
import Theme from "../components/themes";
import BlogList from "../components/BlogList";
import Nav from "../components/Nav";
import Recent from "../components/Recent";
import Footer from "../components/Footer";
import Categories from "../components/categories";


const Home = () => {
    return ( 
        <div>
           
            <ThemeProvider theme={Theme}>
           
            <Nav/>
              <Hero/> 
             
                <Recent/>
                <BlogList/>
            <Footer/>
          
            
                        </ThemeProvider>
        </div>
     );
}
 
export default Home;