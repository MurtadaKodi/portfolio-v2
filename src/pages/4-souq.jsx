import Footer from '../components/5-footer/Footer';
import Header from '../components/1-header/Header';
import '../pages/pages.css'
import SouqImageCard from './4-souq-img';
import SouqMap from './4-souq-map';
import SouqVideo from './4-souq-video';
// import PalaceImag from './5-palace-img';








const Souq = () => {
  return (
    
    <div>
      <Header/>
      {/* <PagesHero/> */}
      {/* <div className='divider'/> */}

      <section className='flex main-container '>
      <SouqMap/>
      </section>

      <section className='flex main-container'>
        <SouqImageCard/>
      </section>

      <div className='divider'/>

      <section className='flex main-container '>
      <SouqVideo/>
      </section>

      



      <div className='divider'/>

      
        
    

    

        <section className='page-fotter'>
          <Footer/>
        </section>

    
    </div>
  );
}

export default Souq;

