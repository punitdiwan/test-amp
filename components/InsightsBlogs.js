
import { Box, Stack } from '@mui/system'
import React from 'react'
import Container from '@mui/material/Container';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const InsightsBlogs = () => {
  return (
    <>
    
    <Container sx={{marginTop:"50px"}} maxWidth="xl">
    <Box>

        <Typography sx={{textAlign:"center", 
                          marginBottom:"30px",
                          color:"#000000",
                          fontFamily: 'Public Sans ',
                          fontStyle: "normal",
                          fontWeight: "700",
                          fontSize: "48px",
                          lineHeight: "56px",
                          marginBottom:"30px"}} >Insights Blogs</Typography>
        <Stack   direction={{ xs: "column", sm: "row" ,lg:"row"}}
        spacing={10} sx={{marginLeft:{xs:"25px" , lg:"10px"}}}>

      {/* <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://img.freepik.com/free-photo/young-attractive-emotional-girl-business-style-clothes_78826-2303.jpg?size=626&ext=jpg&ga=GA1.2.314321471.1665477726&semt=ais"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://img.freepik.com/free-photo/young-attractive-emotional-girl-business-style-clothes_78826-2303.jpg?size=626&ext=jpg&ga=GA1.2.314321471.1665477726&semt=ais"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>


    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://img.freepik.com/free-photo/young-attractive-emotional-girl-business-style-clothes_78826-2303.jpg?size=626&ext=jpg&ga=GA1.2.314321471.1665477726&semt=ais"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://img.freepik.com/free-photo/young-attractive-emotional-girl-business-style-clothes_78826-2303.jpg?size=626&ext=jpg&ga=GA1.2.314321471.1665477726&semt=ais"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> */}

   
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Images/Blog1.png" />
      <Card.Body>
        <Card.Title>March 15, 2023</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
     

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Images/Blog2.png" />
      <Card.Body>
        <Card.Title>March 15, 2023</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Images/Blog3.png" />
      <Card.Body>
        <Card.Title>March 15, 2023</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Images/Blog4.png" />
      <Card.Body>
        <Card.Title>March 15, 2023</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
      

        </Stack>
    </Box>

    <Box textAlign={"center"} >
      <Button style={{margin:"15px" , background:"#1976d2"}} >View Our Blog</Button>
    </Box>
    </Container>

    </>
  )
}

export default InsightsBlogs