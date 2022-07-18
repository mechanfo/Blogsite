import { Grid, Typography } from "@mui/material";
import '../style/category.css'

const category=[
  {
      name:'category1'
  },
  {
      name:'category2'
  },
  {
      name:'category3'
  },
  {
      name:'category4'
  },
  {
      name:'category5'
  },
  {
      name:'category6'
  }
]

const Categories = () => {
  return ( <div className="categories">

    <Grid container spacing={3}>
      {
        category.map((p)=>{
          return(
          <Grid item  sx={3} className="cat-card"> 
          <Typography 
          sx={{margin:'0 auto'}}>
            {p.name}
          </Typography>
          </Grid>)
        })
      }
    </Grid>
  </div> );
}
 
export default Categories;