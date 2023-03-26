import { AppBar,Box,Toolbar,Stack,Button } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';


const MobileMenubar = () => {

  const [open ,SetOpen] =useState(false)

  return (
    <>

    {/*   mobile menubar button start */}

    
      <Box sx={{display:{lg:"none",xs:"block"},marginTop:"81px"}}>
        <AppBar position='static'>
            <Toolbar> 

            <Box>
               
               
               <MenuIcon sx={{height:"50px", width:"70px"}} onClick={()=> SetOpen(!open)}  />

               {
                 open ? <Box>
                   <ul style={{color:"white", listStyle:"none"}}>
                     <li> <h5>Home</h5></li>
                     <li> <h5>About Us</h5></li>
                     <li><h5>What we are</h5></li>
                     <li><h5>How its work</h5></li>
                     <li><h5>Blogs</h5></li>
                     <li><h5>Contact</h5></li>
                   </ul>
                 </Box> 
                 : null
               }
               </Box>


{/*   mobile menubar button end */}


 {/* Find Consultant Button start */}

   {
    !open ? <Stack direction="row" spacing={2} justifyContent={"space-between"} sx={{marginLeft:"0px"}}>

   
    
    <Box>
    
    <Link href={"/"} style={{textDecoration: "none"}}>
    
      <Button
      sx={{ 
       color:"#FFFFFF",
      fontFamily: 'Public Sans ',
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "18px",
      textTransform: "capitalize",
      textDecoration:"none",
      // display:{xs:"none",lg:"block"}
     }}
      >Find Consultant</Button>
      </Link> 
       
       {/* Find Consultant Button end */}
    
    
    
       {/* Browse student profiles Button start */}
    
      <Link href={"/"} style={{textDecoration: "none"}}>
      <Button
      sx={{ 
       
       color:"#FFFFFF",
      fontFamily: 'Public Sans ',
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "18px",
      textTransform: "capitalize",
      textDecoration: "none",
      // display:{xs:"none",lg:"block"}
    }}
      >Browse student profiles</Button>
      </Link> 
    
    </Box>
      
    </Stack>  : null
   }
               
                  {/* Browse student profiles Button end */}



            </Toolbar>
        </AppBar>

      </Box>
    </>
  )
}

export default MobileMenubar
