import Footer from '../components/5-footer/Footer';
import Header from '../components/1-header/Header';
import '../pages/pages.css'
import NorthImageCard from './1-north-img';
import NorthMap from './1-north-map';
import NorthVideo from './1-north-video';

// import PalaceImag from './5-palace-img';








const North = () => {

  
  return (
    
    <div>
      <Header/>
      {/* <PagesHero/> */}

      {/* <div className='divider'/> */}

      <section className='flex main-container '>
      <NorthMap/>
      </section>

      <div className='divider'/>

      <section className='flex main-container'>
        <NorthImageCard/>
      </section>

      <div className='divider'/>

      <section className='flex main-container '>
      <NorthVideo/>
      </section>

        <section className='page-fotter'>
          <Footer/>
        
        </section>
        
    
    
    </div>
  );
}

export default North;

