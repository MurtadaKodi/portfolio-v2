import  { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import './pages2.css'


export default function App() {
  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
    {
      url: "https://res.cloudinary.com/dmklduciw/image/upload/v1691319692/WebSite%20Images/Alzubara%20image/17709_cychyz.jpg",
    },
    {
      url: "https://res.cloudinary.com/dmklduciw/image/upload/v1691319691/WebSite%20Images/Alzubara%20image/25648_lyhomv.jpg",
    },
    {
      url: "https://res.cloudinary.com/dmklduciw/image/upload/v1691319692/WebSite%20Images/Alzubara%20image/17691_mmhlp4.jpg",
    },
    {
      url: "https://res.cloudinary.com/dmklduciw/image/upload/v1691319691/WebSite%20Images/Alzubara%20image/25648_lyhomv.jpg",
    },
    {
      url: "https://res.cloudinary.com/dmklduciw/image/upload/v1691319691/WebSite%20Images/Alzubara%20image/25648_lyhomv.jpg",
    },
  ];
  return (
    <div style={{marginLeft:'auto', marginRight:'auto'}}>
      {/* <h3> Creating the image slider using the react-simple-image-slider</h3> */}
      <section className="image-slide">
        <SimpleImageSlider 
          width={600}
          height={400}
          images={sliderImages}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          onStartSlide={(index, length) => {
            setImageNum(index);
          }}
          autoPlayDelay={2}
        />
      </section>
      
      <div className="imageNum" style={{ fontSize: "1.5rem" , alignItems:'center' }}>
      {imageNum}.
      </div>
    </div>
  );
}
