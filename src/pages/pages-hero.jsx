// import "..components/";
import Lottie from "lottie-react";
import archaeotAnimation from "../animation/archaeo.json";

import { motion } from "framer-motion";


const PagesHero = () => {

  return (
    <section className="pag-hero flex ">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <img
            src="https://res.cloudinary.com/dmklduciw/image/upload/v1689241550/mine/grid_landscape_llefoe.jpg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1 
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{duration:2}}
        
        className="title">
          Software designer, founder,and amateur astronaut
        </motion.h1>

        <p className="subtitle">
          khgkhhhgjhjoj;jhjghf hlkhftgfhjhkgjgfhggj
          ffghgfhfhfhgghghfhghghkgjhhjkgkgggjhjg khgkhhhgjhjoj;jhjghf
          hlkhftgfhjhkgjgfhggj ffghgfhfhfhgghghfhghghkgjhhjkgkgggjhjg
        </p>
        <div className="all-icons flex">
          <div className="icon icon-x"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-youtube-play"></div>
          <div className="icon icon-mail_outline"></div>
        </div>
      </div>
      <div className="right-section animation ">
        <Lottie
          className="contact-animation"
          
          
          loop={true}
          animationData={archaeotAnimation}
        />
      </div>
    </section>
  );
};

export default PagesHero;
