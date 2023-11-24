import { motion } from "framer-motion";
import Header from "../components/1-header/Header";
import Footer from "../components/5-footer/Footer";
import "./pages2.css";

const Site = () => {
  return (
    <div>
      <Header />

      <section className="grid-container ">
        <div className="grid3">
          {" "}
          <img
            className="grid3-img"
            src="https://res.cloudinary.com/dmklduciw/image/upload/v1691319693/WebSite%20Images/Alzubara%20image/44877_q3qrhp.jpg"
            alt=""
          />
        </div>

        <div className="grid1">
          <img
            className="grid1-img"
            src="https://res.cloudinary.com/dmklduciw/image/upload/v1700594814/WebSite%20Images/Alzubara%20image/Archaelogical_site_of_Al_Zubarah_01_vziuzn.jpg"
            alt=""
          />
        </div>

        <div className="grid2">
          <img
            className="grid2-img"
            src="https://res.cloudinary.com/dmklduciw/image/upload/v1691319692/WebSite%20Images/Alzubara%20image/25731_ytgthb.jpg"
            alt=""
          />
        </div>

        <div className="grid4">
          {" "}
          <img
            className="grid4-img"
            src="https://res.cloudinary.com/dmklduciw/image/upload/v1691319692/WebSite%20Images/Alzubara%20image/24896_lnxu6n.jpg"
            alt=""
          />
        </div>

        <div className="grid5">
          {" "}
          <img
            className="grid5-img"
            src="https://res.cloudinary.com/dmklduciw/image/upload/v1691319695/WebSite%20Images/Alzubara%20image/911_u5kfqv.jpg"
            alt=""
          />
        </div>
      </section>

      <section className="grid-container ">
        <div className="grid3">
          {" "}
          <img
            className="grid3-img"
            src="https://res.cloudinary.com/dmklduciw/image/upload/v1700637398/WebSite%20Images/Alzubara%20image/20231029_114331_prif7m.jpg"
            alt=""
          />
        </div>

        <div className="grid1">
          <img
            className="grid1-img"
            src="https://res.cloudinary.com/dmklduciw/image/upload/v1700649525/WebSite%20Images/Alzubara%20image/zubara_site1_w3nkod.jpg"
            alt=""
          />
        </div>

        <div className="grid2">
          <img
            className="grid2-img"
            src="https://res.cloudinary.com/dmklduciw/image/upload/v1700649525/WebSite%20Images/Alzubara%20image/zubara_site2_swnxva.jpg"
            alt=""
          />
        </div>

        <div className="grid4">
          {" "}
          <img
            className="grid4-img"
            src="https://res.cloudinary.com/dmklduciw/image/upload/v1691319692/WebSite%20Images/Alzubara%20image/24896_lnxu6n.jpg"
            alt=""
          />
        </div>

        <div className="grid5">
          {" "}
          <img
            className="grid5-img"
            src="https://res.cloudinary.com/dmklduciw/image/upload/v1691319695/WebSite%20Images/Alzubara%20image/911_u5kfqv.jpg"
            alt=""
          />
        </div>
      </section>

      <section className="details-map-container " style={{ display: "flex" }}>
        <div className="details-grid details2">
          <p className="page-subtitle2">
            Al Zubarah Archaeological Site is located on the north-western coast
            of Qatar; it consists of the town, a harbor area, two extramural
            screening walls, cemeteries, and a a canal. It is one of the best
            preserved examples of a traditional pearl-fishing and merchant town
            in the Gulf and was once a regional centre of the pearl trade. On
            June 22, 2013, UNESCO added the site to its World Heritage List. The
            city was established in 1766, but already present as a settlement in
            1638 (with possible Banu Utbah connections) and the main phase of
            the occupation spanned to 1811. When the Sultan of Muscat barraged
            the city and set it ablaze.
          </p>
        </div>
        <div className="details-grid details2" style={{ height: "800px" }}>
          <p className="page-subtitle2">
            Afterwards, this the town was abandoned until 1820 where a small
            pearling community was based there, but preserving not even 20% of
            the previous extent. In the late 1800 the British attacked
            Zubarah dhows because of a trade dispute which contributed to the
            eventual decline of the settlement. In the mid-20th century it was
            described that only a few Bedouin of the Nuaimi tribe lived off the
            ruined town, which was then finally abandoned. Today the site covers
            an area of 60 hectares, with remains of houses, mosques, large
            fortified buildings and a souq. An estimate of the population at the
            height of the town (ca. 1760s until 1811) has been calculated to a
            maximum number of between 6000 and 9000 people.
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
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7677.690899882571!2d51.0261891!3d25.9792373!3m2!1i1024!
              2i768!4f13.1!5e1!3m2!1sar!2sqa!4v1700678362438!5m2!1sar!2sqa"
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

export default Site;
