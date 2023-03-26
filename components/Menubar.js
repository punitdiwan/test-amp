import { AppBar, Box, Toolbar, Typography,Stack,Button } from '@mui/material'
import React from 'react'
import Link from 'next/link'

const Menubar = () => {
  return (
    <>
    
    <Box sx={{display:{xs:"none",sm:"none", lg:"block"}, marginTop:"81px"}}>
        <AppBar sx={{backgroundColor:"#ffffff" }} position="static">
            <Toolbar sx={{height:"60px"}}>

                


                    <Stack direction="row" spacing={5} justifyContent={"space-between"} sx={{marginLeft:"100px"}}>
                      

                    <Link href={"/"} style={{textDecoration: "none"}}>
                     <Button sx={{
                        color:"#020202",
                        fontFamily: 'Public Sans ',
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "24px",
                        lineHeight: "28px",
                        textTransform: "capitalize"
                        }}>Home</Button> 
                        </Link> 


                        <Link href={"/"} style={{textDecoration: "none"}}>
                     <Button sx={{
                        color:"#020202",
                        fontFamily: 'Public Sans ',
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "24px",
                        lineHeight: "28px",
                        textTransform: "capitalize"
                        }}>About Us</Button> 
                        </Link> 


                        <Link href={"/"} style={{textDecoration: "none"}}>
                     <Button sx={{
                        color:"#020202",
                        fontFamily: 'Public Sans ',
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "24px",
                        lineHeight: "28px",
                        textTransform: "capitalize"
                        }}>What we are</Button> 
                        </Link> 


                        <Link href={"/"} style={{textDecoration: "none"}}>
                     <Button sx={{
                        color:"#020202",
                        fontFamily: 'Public Sans ',
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "24px",
                        lineHeight: "28px",
                        textTransform: "capitalize"
                        }}>How its work</Button> 
                        </Link> 

                        <Link href={"/"} style={{textDecoration: "none"}}>
                     <Button sx={{
                        color:"#020202",
                        fontFamily: 'Public Sans ',
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "24px",
                        lineHeight: "28px",
                        textTransform: "capitalize"
                        }}>Blogs</Button> 
                        </Link> 

                        <Link href={"/"} style={{textDecoration: "none"}}>
                     <Button sx={{
                        color:"#020202",
                        fontFamily: 'Public Sans ',
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "24px",
                        lineHeight: "28px",
                        textTransform: "capitalize"
                        }}>Contact</Button> 
                        </Link> 
                
                    </Stack>  

                   

            </Toolbar>
        </AppBar>
    </Box>

    </>
  )
}

export default Menubar
