import React, { Children, useState } from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import '../style/nav.css'
import Searchbar from "./Search";
import { Modal } from "@mui/material";
import Categories from "./categories";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'min(95vw,500px)',
  bgcolor: 'background.paper',
 
  boxShadow: 24,
  p: 15,
};







const Nav = () => {
  const [openModal, setModalOpen]= useState(false)
  const handleClose= ()=>{
    setModalOpen(false)

  }
  const handleOpen=()=>{
    setModalOpen(true)
  }

  const MobileNav= ()=>{
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);
    return(
        <Box>
             <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} ><a href=""></a></BottomNavigationAction>
          <BottomNavigationAction label="Favorites" icon={<FavoriteBorderOutlinedIcon />}><a href=""></a></BottomNavigationAction>
          <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} ><a href="#App"></a></BottomNavigationAction>         
          <BottomNavigationAction label="Categories" icon={<CategoryOutlinedIcon />}  onClick={handleOpen}><a href=""  ></a></BottomNavigationAction>          
          <BottomNavigationAction label="Blogs" icon={<LibraryBooksOutlinedIcon />} ><a href=""></a></BottomNavigationAction>
        </BottomNavigation>
        </Box>
    )
}
    return ( <div className="nav">
      
        <AppBar position="sticky">
        <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{ flexGrow: 1}}
          >
            BLOGS
          </Typography>
          <Toolbar>
       
        <Typography
            variant="para"
            noWrap
            component="div"
            sx={{ flexGrow: 2}}
          >
           HOME
          </Typography>
        <Typography
            variant="para"
            noWrap
            component="div"
            sx={{ flexGrow: 1}}
            onClick={handleOpen}
          >
           CATEGORIES
          </Typography>
        <Typography
            variant="para"
            noWrap
            component="div"
            sx={{ flexGrow: 1}}
          >
           RECENT
          </Typography>
          
         <Searchbar/>
          </Toolbar>
        </AppBar>
     
        <div className="mobile-nav">
<MobileNav/>

        </div>
        <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Categories/>
        </Box>
      </Modal>

    </div> );
}
 
export default Nav;