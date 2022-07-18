import './App.css';
import React from 'react';
import Home from './views/Home';
import { Routes, Route, Link } from "react-router-dom";
import BlogPage from './views/Blogpage';
import blogs from '../src/components/data'
function App() {
  return (
    <div className="App" id="App">
    
    <Routes>
          <Route path='/' element={<Home/>}/>
         
          {
          blogs.map((p)=>{
              return(
                <Route exact path={`blogs/:${p.id}`} element={<BlogPage id={p.id}/>}key={p.id} />
              )
            })
          }
          
    
    </Routes>
    {/* <BlogPage/> */}
    </div>
  );
}

export default App;
