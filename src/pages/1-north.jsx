import Footer from '../components/5-footer/Footer';
import Header from '../components/1-header/Header';
import '../pages/pages.css'
import VideoPlayer from './2-palace-video';
import ImgMediaCard from './2-palace-img';
import PalaceMap from './2-palace-map';

// import PalaceImag from './5-palace-img';








const North = () => {

  
  return (
    
    <div>
      <Header/>
      {/* <PagesHero/> */}

      <section className='flex main-container'>
        <ImgMediaCard/>
      </section>

      <div className='divider'/>

      <section className='flex main-container '>
      <VideoPlayer/>
      </section>

      <div className='divider'/>

      <section className='flex main-container '>
      <PalaceMap/>
      </section>



      <div className='divider'/>

      
        
    

    

        <section className='page-fotter'>
          <Footer/>
        
        </section>
        
    
    
    </div>
  );
}

export default North;
