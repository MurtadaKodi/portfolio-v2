import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export default function PalaceImageCard() {
  return (
    <div>
      <section className="card-container">
        <Card className="card-layout">
          <CardMedia
            className="img-card"
            component="img"
            alt="green iguana"
            height="100%"
            image="https://res.cloudinary.com/dmklduciw/image/upload/v1700069622/WebSite%20Images/Alzubara%20image/20231029_114829_xbniec.jpg"
          />
        </Card>

        <Card className="card-layout">
          <CardMedia
            className="img-card"
            component="img"
            alt="green iguana"
            height="100%"
            image="https://res.cloudinary.com/dmklduciw/image/upload/v1700594813/WebSite%20Images/Alzubara%20image/Archaelogical_site_of_Al_Zubarah_07_ing5lw.jpg"
          />
        </Card>

        <Card className="card-layout">
          <CardMedia
            className="img-card"
            component="img"
            alt="green iguana"
            height="100%"
            image="https://res.cloudinary.com/dmklduciw/image/upload/v1686040908/WebSite%20Images/Sites/Alzubarah-2_ne8ndo.jpg"
          />
        </Card>

        <Card className="card-layout">
          <CardMedia
            className="img-card"
            component="img"
            alt="green iguana"
            // height="400"
            image="https://res.cloudinary.com/dmklduciw/image/upload/v1700069836/WebSite%20Images/Alzubara%20image/20231025_084802_a78ifl.jpg"
          />
          {/* <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
        
            <Typography className='site-details' variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent> */}
        </Card>
      </section>

      <div className='divider'/>

      <section className="card-container">
        <Card className="card-layout">
          <CardMedia
            className="img-card"
            component="img"
            alt="green iguana"
            height="100%"
            image="https://res.cloudinary.com/dmklduciw/image/upload/v1700670668/WebSite%20Images/Alzubara%20image/56414_ca9nfd.jpg"
          />
        </Card>

        <Card className="card-layout">
          <CardMedia
            className="img-card"
            component="img"
            alt="green iguana"
            height="100%"
            image="https://res.cloudinary.com/dmklduciw/image/upload/v1700675156/WebSite%20Images/Alzubara%20image/Palace_jvgsyg.jpg"
          />
        </Card>

        <Card className="card-layout">
          <CardMedia
            className="img-card"
            component="img"
            alt="green iguana"
            height="100%"
            image="https://res.cloudinary.com/dmklduciw/image/upload/v1700637375/WebSite%20Images/Alzubara%20image/20231029_114908_ma9rnj.jpg"
          />
        </Card>

        <Card className="card-layout">
          <CardMedia
            className="img-card"
            component="img"
            alt="green iguana"
            height="100%"
            image="https://res.cloudinary.com/dmklduciw/image/upload/v1700637375/WebSite%20Images/Alzubara%20image/20231029_114908_ma9rnj.jpg"
          />
          {/* <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
  
      <Typography className='site-details' variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent> */}
        </Card>
      </section>
    </div>
  );
}
