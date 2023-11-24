import Footer from "../components/5-footer/Footer";
import Header from "../components/1-header/Header";
import "../pages/pages.css";
import PalaceMap from "./2-palace-map";
import PalaceImageCard from "./2-palace-img";
import PalaceVideo from "./2-palace-video";
// import PalaceImag from './5-palace-img';

const Palace = () => {
  return (
    <div>
      <Header />
      {/* <PagesHero/> */}
      {/* <div className='divider'/> */}

      <section className="flex main-container ">
        <PalaceMap />
      </section>

      <section className="flex main-container">
        <PalaceImageCard />
      </section>

      <div className="divider" />

      <section className="flex main-container ">
        <PalaceVideo />
      </section>

      <div className="divider" />

      <section className="page-fotter">
        <Footer />
      </section>
    </div>
  );
};

export default Palace;
