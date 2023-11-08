import  { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import './pages.css'
export default function PalaceImag() {
  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
    {
      url: "https://res.cloudinary.com/dmklduciw/image/upload/v1691319695/WebSite%20Images/Alzubara%20image/911_u5kfqv.jpg",
    },
    {
      url: "https://res.cloudinary.com/dmklduciw/image/upload/v1691319694/WebSite%20Images/Alzubara%20image/56251_ocaepn.jpg",
    },
    {
      url: "https://res.cloudinary.com/dmklduciw/image/upload/v1691319693/WebSite%20Images/Alzubara%20image/56251_1_rltji6.jpg",
    },
    {
      url: "https://res.cloudinary.com/dmklduciw/image/upload/v1691319693/WebSite%20Images/Alzubara%20image/44877_q3qrhp.jpg",
    },
    {
      url: "https://res.cloudinary.com/dmklduciw/image/upload/v1691319694/WebSite%20Images/Alzubara%20image/910_chspkr.jpg",
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
