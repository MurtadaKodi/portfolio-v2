
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (

    <section className='card-container'>
      <Card className='card-layout' >
        <CardMedia className='img-card'
          component="img"
          alt="green iguana"
          height="200"
          image="https://res.cloudinary.com/dmklduciw/image/upload/v1689241645/WebSite%20Images/Sites/grid_landscape_ebx5n1.jpg"
        />
        <CardContent>
      
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
      
          <Typography className='site-details'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        
      </Card>

      <Card className='card-layout'  >
        <CardMedia className='img-card'
          component="img"
          alt="green iguana"
          height="200"
          image="https://res.cloudinary.com/dmklduciw/image/upload/v1691319693/WebSite%20Images/Alzubara%20image/56414_ca9nfd.jpg"
        />
        <CardContent>
      
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
      
          <Typography className='site-details' variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        
      </Card>

      <Card className='card-layout'  >
        <CardMedia className='img-card'
          component="img"
          alt="green iguana"
          height="200"
          image="https://res.cloudinary.com/dmklduciw/image/upload/v1689241645/WebSite%20Images/Sites/grid_landscape_ebx5n1.jpg"
        />
        <CardContent>
      
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
      
          <Typography className='site-details' variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        
      </Card>
      
      <Card className='card-layout'  >
        <CardMedia className='img-card'
          component="img"
          alt="green iguana"
          height="200"
          image="https://res.cloudinary.com/dmklduciw/image/upload/v1689241645/WebSite%20Images/Sites/grid_landscape_ebx5n1.jpg"
        />
        <CardContent>
      
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
      
          <Typography className='site-details' variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        
      </Card>

    </section>

    

    
  );
}