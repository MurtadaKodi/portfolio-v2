import { motion } from "framer-motion";
import Header from "../components/1-header/Header";
import Footer from "../components/5-footer/Footer";
import "./pages2.css";

const Near = () => {
  return (
    <div>
      <Header />

      <div>
        <section className="grid-container ">
          <div className="grid1">
            <img
              className="grid1-img"
              src="https://res.cloudinary.com/dmklduciw/image/upload/v1689241357/WebSite%20Images/Sites/grid_large_preview_hpmvhe.jpg"
              alt=""
            />
          </div>
          <div className="grid2">
            <img
              className="grid2-img"
              src="https://res.cloudinary.com/dmklduciw/image/upload/v1689241091/WebSite%20Images/Sites/grid_landscape_efl784.jpg"
              alt=""
            />
          </div>
          <div className="grid3">
            {" "}
            <img
              className="grid3-img"
              src="https://res.cloudinary.com/dmklduciw/image/upload/v1686040922/WebSite%20Images/Sites/Al_Mafjar-3_cujxmz.jpg"
              alt=""
            />
          </div>
          <div className="grid4">
            {" "}
            <img
              className="grid4-img"
              src="https://res.cloudinary.com/dmklduciw/image/upload/v1686040915/WebSite%20Images/Sites/Al_Mafjar-1_bvrdbf.jpg"
              alt=""
            />
          </div>
          <div className="grid5">
            {" "}
            <img
              className="grid5-img"
              src="https://res.cloudinary.com/dmklduciw/image/upload/v1686040918/WebSite%20Images/Sites/Lejmail-5_dgazav.jpg"
              alt=""
            />
          </div>
        </section>

        <section className="grid-container ">
          <div className="grid1">
            <img
              className="grid1-img"
              src="https://res.cloudinary.com/dmklduciw/image/upload/v1689241627/WebSite%20Images/Sites/grid_landscape_k3g0mi.jpg"
              alt=""
            />
          </div>
          <div className="grid2">
            <img
              className="grid2-img"
              src="https://res.cloudinary.com/dmklduciw/image/upload/v1689241336/WebSite%20Images/Sites/grid_landscape_nqvxkr.jpg"
              alt=""
            />
          </div>
          <div className="grid3">
            {" "}
            <img
              className="grid3-img"
              src="https://res.cloudinary.com/dmklduciw/image/upload/v1689241357/WebSite%20Images/Sites/grid_large_preview_hpmvhe.jpg"
              alt=""
            />
          </div>
          <div className="grid4">
            {" "}
            <img
              className="grid4-img"
              src="https://res.cloudinary.com/dmklduciw/image/upload/v1686040922/WebSite%20Images/Sites/Al_Mafjar-5_bfmmxc.jpg"
              alt=""
            />
          </div>
          <div className="grid5">
            {" "}
            <img
              className="grid5-img"
              src="https://res.cloudinary.com/dmklduciw/image/upload/v1686040905/WebSite%20Images/Sites/AinMhd-1_ijee12.jpg"
              alt=""
            />
          </div>
        </section>
      </div>
      <section className="details-map-container ">
        <div className="details-grid details2 flex">
          <p className="page-subtitle">
            I. Aljumail : ………………………………………… <br />
            II. Alareesh : ………………………………………… <br />
            III. Freaha : ………………………………………… <br />
            IV. Ain Mohamed : ……………………………… <br />
            V. Alroidaha : ………………………………………… <br />
            VI. Alrakeat : ………………………………………… <br />
            VII. Althagab : ………………………………………… <br />
            VIII. Aljumail : ………………………………………… <br />
            IX. Alareesh : ………………………………………… 
          
          </p>

          <p className="page-subtitle">
            I. Aljumail : ………………………………………… <br />
            II. Alareesh : ………………………………………… <br />
            III. Freaha : ………………………………………… <br />
            IV. Ain Mohamed : ……………………………… <br />
            V. Alroidaha : ………………………………………… <br />
            VI. Alrakeat : ………………………………………… <br />
            VII. Althagab : ………………………………………… <br />
            VIII. Aljumail : ………………………………………… <br />
            IX. Alareesh : ………………………………………… 
          
          </p>
        </div>

        <div className="map">
          <motion.section
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
          >
            <iframe
              className="frame-map2"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d80367.91922128404!2d51.085940077597115!3d26.032278955405534!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2sqa!4v1700847328642!5m2!1sar!2sqa"
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

export default Near;
