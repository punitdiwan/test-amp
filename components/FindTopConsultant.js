import { Box, Typography } from '@mui/material';
import React from 'react';

const FindTopConsultant = () => {
  return (
    <>
       <Box sx={{display :{lg:"block",xs:"block",sm:"none",md:"none"}}}>
        {/*  find top consultant heading start */}
        
        <Typography sx={{textAlign:"center",
                          color:"#000000",
                          fontFamily: 'Public Sans ',
                          fontStyle: "normal",
                          fontWeight: "700",
                          fontSize: "48px",
                          lineHeight: "56px",
                          marginBottom:"30px",
                          marginTop:"30px"}}> Find top consultants</Typography>

        {/*  find top consultant heading end */}

                          {/* parents box start  */}
       
      <Box sx={{display:"flex",flexWrap:"wrap",gap:"40px",marginLeft:{lg:"100px",xs:"20px"}}}>

    
           {/* Six Box Start */}
      

        <Box sx={{boxShadow: "8px 4px 20px rgba(0, 0, 0, 0.25)", height:"220px" ,paddingRight:"10px",width:"360px"}}>
                <Box sx={{marginLeft:"130px" , marginTop:"52px"}}>
                       <img src="./Images/ProDev.png" alt="logo" height="45px" width="45px" />
                </Box>
           
         <Typography sx={{textAlign:"center",
                          color:"#000000",
                          fontFamily: 'Public Sans ',
                          fontStyle: "normal",
                          fontWeight: "600",
                          fontSize: "24px",
                          lineHeight: "28px",
                          marginTop:"16px"}} >Programming & Development</Typography>

        <Typography sx={{textAlign:"center",
                  color:"#2D2D2D",
                  fontFamily: 'Public Sans ',
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "21px",
                 marginTop:"16px"}}>1442 Consultants </Typography>

        </Box>




        <Box sx={{boxShadow: "8px 4px 20px rgba(0, 0, 0, 0.25)", height:"220px" ,paddingRight:"10px",width:"360px"}}>
                <Box sx={{marginLeft:"130px" , marginTop:"52px"}}>
                       <img src="./Images/Design.png" alt="logo" height="45px" width="45px" />
                </Box>
           
         <Typography sx={{textAlign:"center",
                          color:"#000000",
                          fontFamily: 'Public Sans ',
                          fontStyle: "normal",
                          fontWeight: "600",
                          fontSize: "24px",
                          lineHeight: "28px",
                          marginTop:"16px"}} >Design & Art</Typography>

        <Typography sx={{textAlign:"center",
                  color:"#2D2D2D",
                  fontFamily: 'Public Sans ',
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "21px",
                 marginTop:"16px"}}>Programming & Development</Typography>

        </Box>




        <Box sx={{boxShadow: "8px 4px 20px rgba(0, 0, 0, 0.25)", height:"220px" ,paddingRight:"10px",width:"360px"}}>
                <Box sx={{marginLeft:"130px" , marginTop:"52px"}}>
                       <img src="./Images/Bussiness.png" alt="logo" height="45px" width="45px" />
                </Box>
           
         <Typography sx={{textAlign:"center",
                          color:"#000000",
                          fontFamily: 'Public Sans ',
                          fontStyle: "normal",
                          fontWeight: "600",
                          fontSize: "24px",
                          lineHeight: "28px",
                          marginTop:"16px"}} >Business Finance</Typography>

        <Typography sx={{textAlign:"center",
                  color:"#2D2D2D",
                  fontFamily: 'Public Sans ',
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "21px",
                 marginTop:"16px"}}>Programming & Development</Typography>

        </Box>




        <Box sx={{boxShadow: "8px 4px 20px rgba(0, 0, 0, 0.25)", height:"220px" ,paddingRight:"10px",width:"360px"}}>
                <Box sx={{marginLeft:"130px" , marginTop:"52px"}}>
                       <img src="./Images/Eng&Arc.png" alt="logo" height="45px" width="45px" />
                </Box>
           
         <Typography sx={{textAlign:"center",
                          color:"#000000",
                          fontFamily: 'Public Sans ',
                          fontStyle: "normal",
                          fontWeight: "600",
                          fontSize: "24px",
                          lineHeight: "28px",
                          marginTop:"16px"}} >Engineering & Architecture</Typography>

        <Typography sx={{textAlign:"center",
                  color:"#2D2D2D",
                  fontFamily: 'Public Sans ',
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "21px",
                 marginTop:"16px"}}>Programming & Development</Typography>

        </Box>



        <Box sx={{boxShadow: "8px 4px 20px rgba(0, 0, 0, 0.25)", height:"220px" ,paddingRight:"10px",width:"360px"}}>
                <Box sx={{marginLeft:"130px" , marginTop:"52px"}}>
                       <img src="./Images/Sale&Mark.png" alt="logo" height="45px" width="45px" />
                </Box>
           
         <Typography sx={{textAlign:"center",
                          color:"#000000",
                          fontFamily: 'Public Sans ',
                          fontStyle: "normal",
                          fontWeight: "600",
                          fontSize: "24px",
                          lineHeight: "28px",
                          marginTop:"16px"}} >Sales & Marketing</Typography>

        <Typography sx={{textAlign:"center",
                  color:"#2D2D2D",
                  fontFamily: 'Public Sans ',
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "21px",
                 marginTop:"16px"}}>Programming & Development</Typography>

        </Box>



        <Box sx={{boxShadow: "8px 4px 20px rgba(0, 0, 0, 0.25)", height:"220px" ,paddingRight:"10px",width:"360px"}}>
                <Box sx={{marginLeft:"130px" , marginTop:"52px"}}>
                       <img src="./Images/Legal.png" alt="logo" height="45px" width="45px" />
                </Box>
           
         <Typography sx={{textAlign:"center",
                          color:"#000000",
                          fontFamily: 'Public Sans ',
                          fontStyle: "normal",
                          fontWeight: "600",
                          fontSize: "24px",
                          lineHeight: "28px",
                          marginTop:"16px",
                          marginRight:"40px"}} >Legal</Typography>

        <Typography sx={{textAlign:"center",
                  color:"#2D2D2D",
                  fontFamily: 'Public Sans ',
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "21px",
                 marginTop:"16px"}}>Programming & Development</Typography>

        </Box>


        





      {/* Six Box end */}
      

        </Box>

       {/* parents box end  */}
      
       </Box>
    </>
  )
}

export default FindTopConsultant
