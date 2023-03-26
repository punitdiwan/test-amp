import { AppBar, Box, Toolbar, Typography,Stack,Button ,Divider} from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    <Box >
        <AppBar sx={{backgroundColor:"#ffffff" }} position="fixed">
            <Toolbar sx={{height:"80px"}}>

                <Typography sx={{
                    color:"#212121" ,
                    marginLeft:{lg:"100px", xs:"20px"},
                    fontFamily: 'Public Sans ',
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "48px",
                    lineHeight: "56px",
                    textTransform: "capitalize"}}
                    >Cohorten</Typography> 


                    <Stack direction="row" spacing={3} justifyContent={"space-between"} sx={{marginLeft:"56px"}}>

                     {/* Find Consultant Button start */}

                       <Link href={"/"} style={{textDecoration: "none"}}>
                       <Button
                       sx={{ 
                        
                        color:"#212121",
                       fontFamily: 'Public Sans ',
                       fontStyle: "normal",
                       fontWeight: "500",
                       fontSize: "20px",
                       lineHeight: "24px",
                       textTransform: "capitalize",
                       textDecoration:"none",
                       display:{xs:"none",lg:"block"}
                      }}
                       >Find Consultant</Button>
                       </Link> 
                        
                        {/* Find Consultant Button end */}



                        {/* Browse student profiles Button start */}
                  
                       <Link href={"/"} style={{textDecoration: "none"}}>
                       <Button
                       sx={{ 
                        
                        color:"#212121",
                       fontFamily: 'Public Sans ',
                       fontStyle: "normal",
                       fontWeight: "500",
                       fontSize: "20px",
                       lineHeight: "24px",
                       textTransform: "capitalize",
                       textDecoration: "none",
                       display:{xs:"none",lg:"block"}}}
                       >Browse student profiles</Button>
                       </Link> 

                         {/* Browse student profiles Button end */}
                
                    </Stack>  

                    <Stack direction="row" spacing={5} justifyContent={"space-between"} sx={{marginLeft:{lg:"56px",xs:"-40px"}}}>
 
 
                    <Button sx={{marginLeft:"30px"}} variant="text">Login</Button>
  
                    <Button variant="contained" sx={{height:"41px"}}>Sign Up</Button>

                    </Stack>
                   
            </Toolbar>
        </AppBar>
    </Box>
    </>
  )
}

export default Header
