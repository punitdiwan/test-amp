import React from 'react'
import {Box,Button,Grid,Stack, Typography} from "@mui/material"

// import LandingPageImage from "../assets/LandingPageImage.png"
const LandingPageBanner = () => {
  return (
    <>

    <Box >
    <Box
        sx={{
          color: "#f5f5f5",
          background: `linear-gradient(96.79deg, #000000 0.31%, rgba(0, 0, 0, 0.48) 87.08%) , url(./Images/landImg.jpg) no-repeat`,
          objectFit: "contain"
        }}
      >
           
 
           <Grid container > 

                <Grid item xs={8}>
    
                    <Stack spacing={2} sx={{marginLeft:{xs:"25px",lg:"50px"},marginTop:"50px " , marginBottom:"50px"}}>

                      <Typography sx={{ color:"#FFFFFF",
                        fontFamily: 'Public Sans ',
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "48px",
                        lineHeight: "56px",
                        textTransform: "capitalize",
                             }}>
                      Consult with <br/> Student & Alumni <br/>before your <br/> Next Move.
                      </Typography>


                       <Stack  direction={{ xs: 'column', lg: 'row' }}>
                        

                            {/* button Find a friend  start */}

                           <Box sx={{marginRight:{lg:"50px",xs:"0px"}}}>

                             <Button variant="contained" sx={{ height:"70px",
                             width:"280px",border:"1px solid #ffffff"}}>
                             Find a Friendly Student
                             </Button>
                           </Box>

                            {/* button Find a friend  start */}


                             {/* button Earn Money Consulting  end */}
                            
                           <Box>
                             <Button sx={{background:'linear-gradient(to right bottom, #000000, #FFFFFF)',
                             color:"white",
                             height:"70px",
                             width:"280px",
                             border:"1px solid #ffffff",
                             marginTop:{lg:"0px" ,xs:"20px",
                            ":hover":{background:'#403f3e'}}
                             }}>
                             Earn Money Consulting
                             </Button>
                           </Box>

                           
                              {/* button Earn Money Consulting  end */}

                      </Stack> 


                    </Stack>

            </Grid>


          {/* <Grid item xs={4}>
    
          </Grid> */}
  

         </Grid>

       
        </Box>

       


    </Box>

    </>
  )
}

export default LandingPageBanner
