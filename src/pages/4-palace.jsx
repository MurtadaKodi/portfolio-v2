import Footer from '../components/5-footer/Footer';
import Header from '../components/1-header/Header';
import '../pages/pages.css'
import { motion } from 'framer-motion';
import PalaceImag from './5-palace-img';
import PalaceVideo from './6-palace-video';






const Palace = () => {
  return (
    
    <div>
      <Header/>
      {/* <div className='divider'/> */}
      {/* <Hero/> */}
      {/* <div className='divider'/> */}
      <section className="slider-sec" >
        <PalaceVideo/>
        <PalaceImag/>
      </section>

      {/* <div className='divider'/> */}

      <section  className='flex main-sec ' >

      <section >
        {/* <div className='divider'/> */}
      <motion.h1 
        >
          <p className="subtitle pages">
            khgkhhhgjhjoj;jhjghf hlkhftgfhjhkgjgfhggj
            ffghgfhfhfhgghghfhghghkgjhhjkgkgggjhjg khgkhhhgjhjoj;jhjghf
            hlkhftgfhjhkgjgfhggj ffghgfhfhfhgghghfhghghkgjhhjkgkgggjhjg
            khgkhhhgjhjoj;jhjghf hlkhftgfhjhkgjgfhggj
            ffghgfhfhfhgghghfhghghkgjhhjkgkgggjhjg khgkhhhgjhjoj;jhjghf
            hlkhftgfhjhkgjgfhggj ffghgfhfhfhgghghfhghghkgjhhjkgkgggjhjg
            khgkhhhgjhjoj;jhjghf hlkhftgfhjhkgjgfhggj
            ffghgfhfhfhgghghfhghghkgjhhjkgkgggjhjg khgkhhhgjhjoj;jhjghf
            hlkhftgfhjhkgjgfhggj ffghgfhfhfhgghghfhghghkgjhhjkgkgggjhjg
          </p>
        </motion.h1>


        

        </section>


        <motion.section
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{duration:2}}
        
        className="title title-page map-sec"
        >
        <iframe className='frame-map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d716.2171879634423!2d51.027403648853884!3d25.983217444334212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2sqa!4v1699096383286!5m2!1sar!2sqa" 
        ></iframe>
    {/* width="500" height="500" */}
        </motion.section>

        
      </section>
      

      
      
      {/* <div className='divider'/> */}
      <div className='page-fotter'>
        <Footer/>
      </div>
    
    </div>
  );
}

export default Palace;

