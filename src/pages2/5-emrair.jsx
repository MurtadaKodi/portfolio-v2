import { motion } from 'framer-motion';
import Header from '../components/1-header/Header';
import Footer from '../components/5-footer/Footer';
import './pages2.css'


const Emrair = () => {
  return (
    <div>
      <Header/>

      <section className="grid-container main-container2">
        <div className='grid1'><img className='grid1-img' 
        src="https://res.cloudinary.com/dmklduciw/image/upload/v1691319691/WebSite%20Images/Alzubara%20image/17680_uv4hmy.jpg" alt="" /></div>
        <div className='grid2'><img className='grid2-img' 
        src="https://res.cloudinary.com/dmklduciw/image/upload/v1691319692/WebSite%20Images/Alzubara%20image/17691_mmhlp4.jpg" alt="" /></div>
        <div className='grid3'> <img className='grid3-img' 
        src="https://res.cloudinary.com/dmklduciw/image/upload/v1691319692/WebSite%20Images/Alzubara%20image/25660_e4ee9b.jpg" alt="" /></div>
        <div className='grid4'> <img className='grid4-img' 
        src="https://res.cloudinary.com/dmklduciw/image/upload/v1691319692/WebSite%20Images/Alzubara%20image/17713_xuitcy.jpg" alt="" /></div>
        <div className='grid5'> <img className='grid5-img' 
        src="https://res.cloudinary.com/dmklduciw/image/upload/v1691319692/WebSite%20Images/Alzubara%20image/17709_cychyz.jpg" alt="" /></div>
      </section>

      <section className="flex frame-container main-container2">

        <section >
          
        <section  className='flex details-map ' >

<section className="details2">
<motion.h1>
    <p>
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
  className="map">
  <iframe className='frame-map2' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d716.2171879634423!2d51.027403648853884!3d25.983217444334212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2sqa!4v1699096383286!5m2!1sar!2sqa" 
  ></iframe>
{/* width="500" height="500" */}
  </motion.section>

      </section>

        </section>
        
      </section>

      
      <div className='page-fotter'>
        <Footer/>
      </div>
  </div>
  );
}

export default Emrair;
