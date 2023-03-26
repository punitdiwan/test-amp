import { Stack,Box } from '@mui/material'
import React from 'react'

const University = () => {
  return (
    <>

     {/* <Stack direction="row" spacing={7}> */}

<Box sx={{display:{xs:"none",sm:"none", lg:"block"}}}>
   <Box sx={{display:"flex",height:"80px",justifyContent:"space-between",}}>

     <img src="./Images/University1.png"  alt="BANGOR"   className='fluid' />
     <img src="./Images/University2.png"  alt="LIVERPOOL"  className='fluid' />
     <img src="./Images/University3.png"  alt="BRUNEL"  className='fluid' />
     <img src="./Images/University4.png"  alt="EDGE HILL"  className='fluid' />
     <img src="./Images/University5.png"  alt="OXFORD"  className='fluid' />

     </Box>
     </Box>
     {/* </Stack> */}

    </>
  )
}

export default University
