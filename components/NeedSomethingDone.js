import React from 'react'
import { Box, Typography ,Grid} from '@mui/material'
const NeedSomethingDone = () => {
  return (
    <>
     
{/* Need Something Done  Heading Start */}

<Typography sx={{ marginTop:"30px",
                       color:"#000000",
                       fontFamily: 'Public Sans ',
                       fontStyle: "normal",
                       fontWeight: "700",
                       fontSize: "48px",
                       lineHeight: "56px",
                       marginLeft:{xs:"50px" , lg:"50px"}
                       }}>
           Need something done?
            </Typography>  

  {/* Need Something Done  Heading end */}

{/* parents grid " Need Something Done" start  */}

            <Box sx={{marginLeft:"40px"}}>
<Grid container spacing={4} sx={{marginTop:"30px",marginLeft:{xs:"0px", sm:"30px", lg:"0px"}}}>


{/* child grid " Need Something Done" start  */}

  <Grid item lg={3} >
  <Box sx={{width:"273px" }}>

<Typography sx={{textAlign:"center",
       color:"#000000",
       fontFamily: 'Public Sans ',
       fontStyle: "normal",
       fontWeight: "700",
       fontSize: "24px",
       lineHeight: "28px"}}>Post a Querry</Typography>


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
       lineHeight: "28px"}}>Post a Querry</Typography>


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
       lineHeight: "28px"}}>Post a Querry</Typography>


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
       lineHeight: "28px"}}>Post a Querry</Typography>


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

  {/* child grid " Need Something Done" end  */}

</Grid>
</Box>

{/* parents grid " Need Something Done" end  */}
    </>
  )
}

export default NeedSomethingDone
