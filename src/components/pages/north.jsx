import Hero from "../2-hero/Hero";
import Header from "../1-header/Header";
import Main from "../3-main/Main";
import Contact from "../4-contact/Contact";
import Footer from "../5-footer/Footer";


const NorthenHouse = () => {
  return (
    
    <div>
      <Header/>
      <h1>
      Northen House
      </h1>

      
      {/* <div className='divider'/> */}
      <Hero/>
      <div className='divider'/>
      <Main/>
      <div className='divider'/>
      <Contact/>
      <div className='divider'/>
      <Footer/>
      
    </div>
  );
}

export default NorthenHouse;
