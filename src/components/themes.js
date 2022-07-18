import { Typography } from '@mui/material'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'

const Theme = createTheme({
    palette:{
        primary:{
            main:'#6a82fb',

    }},

    Typography:{
        sliderTitle:{
            
        },
        subtitle:{
           fontSize:"6px"
        }
    }
})

export default Theme