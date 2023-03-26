import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {dataDigitalBestSeller} from "./WhatStudentSayData"
import { Typography,Grid,Box,Stack } from '@mui/material';
const WhatStudentSay = () => {

    const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    
       <Box sx={{display:{lg:"block",xs:"block",md:"none",sm:"none"}}} >
         <Typography sx={{
          textAlign:"center", marginTop:"30px",
                       color:"#000000",
                       fontFamily: 'Public Sans ',
                       fontStyle: "normal",
                       fontWeight: "700",
                       fontSize: "48px",
                       lineHeight: "56px",
                       marginLeft:{xs:"10px" , lg:"40px"}
                       }}>
           What Student Say 
            </Typography> 
      

            <Typography sx={{
          textAlign:"center", marginTop:"30px",
                       color:"#000000",
                       fontFamily: 'Public Sans ',
                       fontStyle: "normal",
                       fontWeight: "500",
                       fontSize: "20px",
                       lineHeight: "24px",
                       marginBottom:"30px",
                       
                       }}>
           Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
            </Typography> 
      

  <Grid container spacing={2}>

  <Grid item xs={3} sx={{diplay:{sx:"none"}}}> </Grid>

      <Grid item xs={6}>
           <Slider {...settings}>
              {dataDigitalBestSeller.map((item) => (
              <div key={item.id}>
              {/* <Grid container spacing={2}>
              <Grid item xs={4}>

              <img src="./Images/student.png" alt="log" height="60px" width="60px" style={{borderRadius:"50px"}} />
              </Grid>
              <Grid item xs={8}>
             <Typography>john</Typography>
             <Typography>student of univercity of cambrige</Typography>
             </Grid>
 
             </Grid> */}
             
             <Stack direction="row" spacing={2} sx={{marginLeft:{lg:"150px"}}}>
               <Box>
               <img src="./Images/student.png" alt="log" height="60px" width="60px" style={{borderRadius:"50px"}} />
               </Box>

               <Box>
               <Typography variant='h6'>john</Typography>
             <Typography>student of univercity of cambrige</Typography>
                </Box>

            </Stack>


             </div>
                ))}
             </Slider>
             </Grid>

      <Grid item xs={3} sx={{diplay:{sx:"none"}}}> </Grid>


      </Grid>
    </Box>
    
  )
}

export default WhatStudentSay
