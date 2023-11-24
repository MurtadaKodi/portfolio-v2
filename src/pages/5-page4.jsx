import Footer from "../components/5-footer/Footer";
import Header from "../components/1-header/Header";
import "../pages/pages.css";
import Page4ImageCard from "./5-page4-img";
import Page4Video from "./5-page4-video";
import Page4Map from "./5-page4-map";
// import PalaceImag from './5-palace-img';

const Page4 = () => {
  return (
    <div>
      <Header />
      {/* <PagesHero/> */}
      {/* <div className='divider'/> */}

      <section className="flex main-container ">
        <Page4Map />
      </section>

      <section className="flex main-container">
        <Page4ImageCard />
      </section>

      <div className="divider" />

      <section className="flex main-container ">
        <Page4Video />
      </section>

      <div className="divider" />

      <section className="page-fotter">
        <Footer />
      </section>
    </div>
  );
};

export default Page4;
