import { motion } from 'framer-motion';

const PalaceMap = () => {
  return (
    
      <section  className='map-container ' >

<section className='details'>
  {/* <div className='divider'/> */}
<motion.h1 >
    <p className="page-subtitle">
    Large scale building located in the southwestern part of the town. It was built during the town’s heyday in the late 18th and early 19th century. The compound follows the same form as the domestic architecture elsewhere in Al Zubarah, but on a much larger scale.

The complex is defined by a square perimeter wall with towers at each corner capable of supporting small cannons. The 110 x 100m long walls enclose an area of just over one hectare. On the interior, the palatial compound is defined by at least nine large rectangular courtyards around which a series of rooms was arranged. This multistorey building would have risen above much of the town and was probably occupied by a family of wealthy and influential sheikhs who were important community leaders.



The walls of this building are substantially larger and better constructed than others in Al Zubarah. 






The southwestern tower was certainly once an imposing structure, which would have symbolized the compound inhabitant’s authority and importance. 


    </p>
  </motion.h1>
  </section>

  <motion.section
  initial={{scale:0}}
  animate={{scale:1}}
  transition={{duration:2}}
  className="map-sec">
  <iframe className='frame-map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d244.46240689351424!2d51.025770762960214!3d25.973518673465335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2sqa!4v1700591344360!5m2!1sar!2sqa"
  ></iframe>
{/* width="500" height="500" */}
  </motion.section>

  
</section>
  
  );
}

export default PalaceMap;
