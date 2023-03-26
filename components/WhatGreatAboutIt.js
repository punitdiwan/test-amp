import React from 'react'
import { Box, Typography ,Grid} from '@mui/material'


const WhatGreatAboutIt = () => {
  return (
    <>
  <Box >

  {/*  heading  WhatGreatAboutIt Heading Start */}

    <Typography sx={{ marginTop:"30px",
                       color:"#000000",
                       fontFamily: 'Public Sans ',
                       fontStyle: "normal",
                       fontWeight: "700",
                       fontSize: "48px",
                       lineHeight: "56px",
                       marginLeft:{xs:"50px" , lg:"50px"}
                       }}>
           What great about it ?
            </Typography>  

{/*  heading  WhatGreatAboutIt Heading End */}


 {/*  parent Grid  WhatGreatAboutIt start */}

<Box sx={{marginLeft:"40px"}}>

<Grid container spacing={4} sx={{marginTop:"30px",marginLeft:{xs:"0px", sm:"30px", lg:"0px"}}}>

  {/*  Child Grid  WhatGreatAboutIt start */}


  <Grid item lg={3} >
  <Box sx={{width:"273px" }}>

<Typography sx={{textAlign:"center",
       color:"#000000",
       fontFamily: 'Public Sans ',
       fontStyle: "normal",
       fontWeight: "700",
       fontSize: "24px",
       lineHeight: "28px"}}>Consultant Profile</Typography>


<Typography sx={{textAlign:"center",
color:"#000000",
fontFamily: 'Public Sans ',
fontStyle: "normal",
fontWeight: "500",
fontSize: "18px",
lineHeight: "21px",
marginTop:"40px"
      }}>It’s free and easy to post a Query. You can get a consultant list fromto choose for.</Typography>

</Box>
  </Grid>
  <Grid item lg={3}>
  <Box sx={{width:"273px" }}>

<Typography sx={{textAlign:"center",
       color:"#000000",
       fontFamily: 'Public Sans ',
       fontStyle: "normal",
       fontWeight: "700",
       fontSize: "24px",
       lineHeight: "28px"}}>Fast Consultant</Typography>


<Typography sx={{textAlign:"center",
color:"#000000",
fontFamily: 'Public Sans ',
fontStyle: "normal",
fontWeight: "500",
fontSize: "18px",
lineHeight: "21px",
marginTop:"40px"
      }}>It’s free and easy to post a Query. You can get a consultant list fromto choose for.</Typography>

</Box>
  </Grid>
  <Grid item lg={3}>
  <Box sx={{width:"273px" }}>

<Typography sx={{textAlign:"center",
       color:"#000000",
       fontFamily: 'Public Sans ',
       fontStyle: "normal",
       fontWeight: "700",
       fontSize: "24px",
       lineHeight: "28px"}}>Quality Work</Typography>


<Typography sx={{textAlign:"center",
color:"#000000",
fontFamily: 'Public Sans ',
fontStyle: "normal",
fontWeight: "500",
fontSize: "18px",
lineHeight: "21px",
marginTop:"40px"
      }}>It’s free and easy to post a Query. You can get a consultant list fromto choose for.</Typography>

</Box>
  </Grid>
  <Grid item lg={3}>
  <Box sx={{width:"273px" }}>

<Typography sx={{textAlign:"center",
       color:"#000000",
       fontFamily: 'Public Sans ',
       fontStyle: "normal",
       fontWeight: "700",
       fontSize: "24px",
       lineHeight: "28px"}}>Track Progress</Typography>


<Typography sx={{textAlign:"center",
color:"#000000",
fontFamily: 'Public Sans ',
fontStyle: "normal",
fontWeight: "500",
fontSize: "18px",
lineHeight: "21px",
marginTop:"40px"
      }}>It’s free and easy to post a Query. You can get a consultant list fromto choose for.</Typography>

</Box>
  </Grid>

  {/*  Child Grid  WhatGreatAboutIt end */}

</Grid>
</Box>

  {/*  parent Grid  WhatGreatAboutIt end */}

</Box>
    </>
  )
}

export default WhatGreatAboutIt
