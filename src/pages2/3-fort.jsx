import { motion } from "framer-motion";
import Header from "../components/1-header/Header";
import Footer from "../components/5-footer/Footer";
import "./pages2.css";

const Fort = () => {
  return (
    <div>
      <Header />

      <section className="grid-container ">
        <div className="grid1">
          <img
            className="grid1-img"
            src="https://res.cloudinary.com/dmklduciw/image/upload/v1691319691/WebSite%20Images/Alzubara%20image/17680_uv4hmy.jpg"
            alt=""
          />
        </div>
        <div className="grid2">
          <img
            className="grid2-img"
            src="https://res.cloudinary.com/dmklduciw/image/upload/v1691319692/WebSite%20Images/Alzubara%20image/17691_mmhlp4.jpg"
            alt=""
          />
        </div>
        <div className="grid3">
          {" "}
          <img
            className="grid3-img"
            src="https://res.cloudinary.com/dmklduciw/image/upload/v1691319692/WebSite%20Images/Alzubara%20image/25660_e4ee9b.jpg"
            alt=""
          />
        </div>
        <div className="grid4">
          {" "}
          <img
            className="grid4-img"
            src="https://res.cloudinary.com/dmklduciw/image/upload/t_Banner 16:9/v1700576751/WebSite%20Images/Alzubara%20image/ZubaraFort_egnbds.jpg"
            alt=""
          />
        </div>
        <div className="grid5">
          {" "}
          <img
            className="grid5-img"
            src="https://res.cloudinary.com/dmklduciw/image/upload/v1691319692/WebSite%20Images/Alzubara%20image/17709_cychyz.jpg"
            alt=""
          />
        </div>
      </section>

      <section className="details-map-container " style={{ display: "flex" }}>
        <div className="">
          <p className="page-subtitle2">
            Al Zubarah fort is located in the north-west of the peninsula of
            Qatar. The fort was built in 1938 (possibly built as a replacement
            for a nearby destroyed fort) during the rule of Shk. Abdullah bin
            Jassim Al Thani. It was constructed by local builders. The purpose
            of building was to watch and defend the west coast of Qatar. The
            fort served as an encampment for soldiers until June 1986 when the
            later added gatehouse was destroyed. The fort has a square shape
            with a 24 meters wall length from tower to tower on each side of the
            square. Three of the corner towers are circular and one is
            rectangular - all the towers are decorated with pointed parapets.
            This fort is unique for the height of it&#8217;s walls and their thickness
            (1 metre)
          </p>
        </div>
        <div className="details-grid details2" style={{ height: "800px" }}>
          <p className="page-subtitle2">
            The upper levels of the walls are fitted with small openings that
            served for shooting and watching purposes. The fort was built from
            stone quarried from nearby hills which were bonded together using
            mud. On the ground level there are 8 rooms on the western and
            southern sides, while the eastern and northern walls have
            longitudinal iwans overlooking the court through square arcades. On
            the north-east corner of the eastern iwan there is a washing area
            bounded on the west by a water well which is 15 metres deep. Under
            the north east and south east towers there are two rooms while the
            other two towers have a solid fill. Two staircases lead up to the
            four upper rooms on the first level of the fort.
          </p>
        </div>

        <div className="map">
          <motion.section
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
          >
            <iframe
              className="frame-map2 frame-site"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d375.6364575066291!2d51.04538450069717!3d25.97692366996642!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2sqa!4v1700845678592!5m2!1sar!2sqa"
            ></iframe>
          </motion.section>
        </div>
      </section>

      <div className="page-fotter">
        <Footer />
      </div>
    </div>
  );
};

export default Fort;
