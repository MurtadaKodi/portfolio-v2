import { motion } from 'framer-motion';

const Page4Map = () => {
  return (
    
      <section  className='map-container flex' >

<section className='details'>
  {/* <div className='divider'/> */}
<motion.h1 className="page-subtitle">
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

  <section className='map2'>
    <motion.section
    initial={{scale:0}}
    animate={{scale:1}}
    transition={{duration:2}}
    className="map2">
    <iframe className='frame-map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d716.2171879634423!2d51.027403648853884!3d25.983217444334212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2sqa!4v1699096383286!5m2!1sar!2sqa" 
    ></iframe>
    
    </motion.section>
  </section>

  
</section>
  
  );
}

export default Page4Map;
