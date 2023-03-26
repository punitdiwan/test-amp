import { Typography , Box,Grid,Stack,styled, Button} from '@mui/material'
import React from 'react'

const Head= styled(Typography)`
font-size: 24px;
font-weight:700;
line-height:28px;
font-family: 'Public Sans';
font-style: normal;
margin-bottom:0px;
color:#FFFFFF
`
const SubHead = styled(Typography)`
font-size: 20px;
font-weight:500;
line-height:24px;
font-family: 'Public Sans';
font-style: normal;
margin-bottom:15px;
color:#FFFFFF
`
const WhyStudentChooseUs = () => {
  return (
    <>
      <Box sx={{background:'#363E51',marginTop:"20px"}}>

    
      <Typography sx={{paddingTop:"30px",
                       color:"#FFFFFF",
                       fontFamily: 'Public Sans ',
                       fontStyle: "normal",
                       fontWeight: "700",
                       fontSize: "48px",
                       lineHeight: "56px",
                       textAlign:"center"
                       }}>
           Why Millions of Students Choose Us
            </Typography>  



      <Grid container spacing={0} sx={{padding:"10px"}}>
{/* grid part 1 start*/}


          <Grid item lg={4} xs={12} sx={{paddingLeft:{lg:"60px",xs:"0px"}}}>
                 <Stack direction="column" spacing={2}>
                         <Box>
                         <Stack direction="row" spacing={2}>
                              <img src="./Images/Cridibility.png" alt="img" height="45px" width="45px"/>
                              <Head>Credibility</Head>
                        </Stack>
                        <SubHead>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eius?</SubHead>
                         </Box>
                </Stack>

                <Stack direction="column" spacing={2}>
                         <Box>
                         <Stack direction="row" spacing={2}>
                         <img src="./Images/Security.png" alt="img" height="45px" width="45px"/>
                              <Head>Security</Head>
                        </Stack>
                        <SubHead>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eius?</SubHead>
                         </Box>
                </Stack>


                <Stack direction="column" spacing={2}>
                         <Box>
                         <Stack direction="row" spacing={2}>
                         <img src="./Images/Support.png" alt="img" height="45px" width="45px"/>
                              <Head>Support</Head>
                        </Stack>
                        <SubHead>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eius?</SubHead>
                         </Box>
                </Stack>
          </Grid>

         {/* grid part 1 end */}

           {/* grid part 2 start */}

  <Grid item lg={4} xs={12} >
  <Box>
<img src="/Images/Girl.png" alt="girl" height="400px" width="613px" style={{marginLeft:"-100px"}}/>
  </Box>
  </Grid>

            {/* grid part 2 end */}

            {/* grid part 3 start */}
  <Grid item lg={4} xs={12}>
                 

  <Stack direction="column" spacing={2}>
                         <Box>
                         <Stack direction="row" spacing={2} sx={{marginTop:{xs:"20px",lg:"0px"}}}>
                         <img src="./Images/Flexibility.png" alt="img" height="45px" width="45px"/>
                              <Head>Flexibility</Head>
                        </Stack>
                        <SubHead>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eius?</SubHead>
                         </Box>
                </Stack>

                <Stack direction="column" spacing={2}>
                         <Box>
                         <Stack direction="row" spacing={2}>
                         <img src="./Images/Value.png" alt="img" height="45px" width="45px"/>
                              <Head>Value</Head>
                        </Stack>
                        <SubHead>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eius?</SubHead>
                         </Box>
                </Stack>

               <Button  variant='contained'sx={{marginLeft:{lg:"0px",xs:"110px"},marginBottom:"10px"}}>Why Choose Us</Button>
            


  </Grid>
  
              {/* grid part 3 end */}

  {/*  */}
</Grid>


      </Box>
    </>
  )
}

export default WhyStudentChooseUs
