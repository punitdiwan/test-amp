import React from 'react'
import { Box, Typography ,Grid,Stack, styled} from '@mui/material'

const Head= styled(Typography)`
font-size: 24px;
font-weight:700;
line-height:28px;
font-family: 'Public Sans';
font-style: normal;
margin-bottom:20px;
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


const Footer = () => {
  return (
    <>
  <Box sx={{background:'#363E51'}} >


   


<Grid container spacing={4} sx={{marginTop:"30px",marginLeft:{xs:"50px", lg:"0px"}}}>

    {/*  */}

{/* 
    <Grid item lg={1} sx={{diplay:{xs:"none" ,lg:"inline-block"}}} >
  <Box sx={{width:"273px" }}>


  
</Box>
  </Grid> */}

{/*  */}
  <Grid item lg={3} >
  <Box sx={{width:"273px" }}>

  <Head >Navigate</Head>

  <SubHead >Home</SubHead>
<SubHead >What we are</SubHead>
<SubHead >Find Concultant</SubHead>

  
</Box>
  </Grid>

{/*  */}

  <Grid item lg={2}>
  <Box sx={{width:"273px" }}>


  <Head variant='h6'>Company Info</Head>

<SubHead >About us</SubHead>
<SubHead >How it's Work</SubHead>
<SubHead >Why We Are</SubHead>
<SubHead > Work Agreement</SubHead>
<SubHead >Safe Pay</SubHead>



</Box>
  </Grid>

{/*  */}


  <Grid item lg={2}>
  <Box sx={{width:"273px" }}>


  <Head variant='h6'>Resources</Head>

<SubHead >Help and FAQ</SubHead>
<SubHead >Blog</SubHead>
<SubHead >Contact Us</SubHead>



</Box>
  </Grid>


  {/*  */}



  <Grid item lg={2}>
  <Box sx={{width:"273px" }}>


  <Head variant='h6'>Policies</Head>

<SubHead >Privacy Policy</SubHead>
<SubHead >Term and Condition</SubHead>
<SubHead >Copyright Policy</SubHead>
<SubHead >Fees And Charges</SubHead>



</Box>
  </Grid>


{/*  */}


<Grid item lg={2}>
  <Box sx={{width:"273px" }}>

  <Head variant='h6'>Connect with Us</Head>

  <Stack direction="row" spacing={3} >

    <img src="./Images/Facebook.png"  alt="facebook" height="35px" width="35px" />

    <img src="./Images/Skype.png"  alt="Skype" height="35px" width="35px" />

    <img src="./Images/LinkedIn.png"  alt="Linkedin" height="35px" width="35px" />

   </Stack>


</Box>
  </Grid>


{/*  */}


<Grid item lg={1} >
  <Box sx={{width:"273px" }}>


  
</Box>
  </Grid>

  {/*  */}

</Grid>


</Box>

   {/* copy right footer start*/}

   <Box sx={{background:"#2B3147" , color:"white"}}>

   <Grid container>
  <Grid item xs={12}>
    
  </Grid>
  <Typography sx={{marginLeft:"30px"}}>
  Copyright © 2023.
  </Typography>
</Grid>
   </Box>

 {/* copy right footer end*/}


    </>
  )
}

export default Footer
