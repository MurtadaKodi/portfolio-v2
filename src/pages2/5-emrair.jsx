import { motion } from "framer-motion";
import Header from "../components/1-header/Header";
import Footer from "../components/5-footer/Footer";
import "./pages2.css";

const Emrair = () => {
  return (
    <div>
      <Header />

      <section className="grid-container ">
        <div className="grid1">
          <img
            className="grid1-img"
            src="https://res.cloudinary.com/dmklduciw/image/upload/v1689241645/WebSite%20Images/Sites/grid_landscape_ebx5n1.jpg"
            alt=""
          />
        </div>
        <div className="grid2">
          <img
            className="grid2-img"
            src="https://res.cloudinary.com/dmklduciw/image/upload/v1689241597/WebSite%20Images/Sites/grid_landscape_dvyv80.jpg"
            alt=""
          />
        </div>
        <div className="grid3">
          {" "}
          <img
            className="grid3-img"
            src="https://res.cloudinary.com/dmklduciw/image/upload/v1689241224/WebSite%20Images/Sites/grid_landscape_iempho.jpg"
            alt=""
          />
        </div>
        <div className="grid4">
          {" "}
          <img
            className="grid4-img"
            src="https://res.cloudinary.com/dmklduciw/image/upload/v1689241616/WebSite%20Images/Sites/grid_landscape_dyk7nc.jpg"
            alt=""
          />
        </div>
        <div className="grid5">
          {" "}
          <img
            className="grid5-img"
            src="https://res.cloudinary.com/dmklduciw/image/upload/v1689241616/WebSite%20Images/Sites/grid_landscape_dyk7nc.jpg"
            alt=""
          />
        </div>
      </section>

      <section className="details-map-container " >
        <div className="">
          <p className="page-subtitle2">
          Originally, Qalaat Murair was a fortified settlement at the core of
            which stood a large fort, measuring 170 x 160 m in plan. Inside the
            fort was a heavily built-up area, consisting of several large
            courtyard houses and a multi-domed mosque at the northern gate.
            Other features include several wells, which tapped into the
            freshwater available on the escarpment. These wells constituted Al
            Zubarah’s principal source of potable water. The protection of this
            precious resource was therefore paramount – not only to sustain the
            occupation of Al Zubarah, but also to supply the town’s pearling and
            trading fleet. Presently preserved at the site are the southern
            perimeter wall of the fort, the south-western corner tower, the
            western perimeter wall, 
            and elements of the northern perimeter wall.
            All are heavily eroded and difficult to see in the landscape.
          </p>
        </div>
        

        <section className="map2">
          <motion.section className="map"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
          >
            <iframe
              className="frame-map2 frame-site"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d413.0104385422405!2d51.04315760164594!3d25.974403970046676!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2sqa!4v1700844121852!5m2!1sar!2sqa"
            ></iframe>
          </motion.section>
        </section>
      </section>

      <div className="page-fotter">
        <Footer />
      </div>
    </div>
  );
};

export default Emrair;
