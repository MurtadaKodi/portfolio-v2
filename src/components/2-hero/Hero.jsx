import "./hero.css";
import Lottie from "lottie-react";
import archaeotAnimation from "../../animation/archaeo.json";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero flex ">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <img
            src="https://res.cloudinary.com/dmklduciw/image/upload/v1686223855/Picture1_sokkxb.jpg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Network of Museums, heritage, Archaeological sites, festivals, public art installations....
        </motion.h1>

        <p className="subtitle">
          Qatar Museums is a Qatari government entity that oversees the Museums
          Exhibition Space, the Al Zubarah World Heritage Site Visitor Centre,
          and archaeological projects throughout Qatar, as well as the
          development of future archaeological projects and museums that will
          highlight its collections across multiple areas of activity.
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

export default Hero;
