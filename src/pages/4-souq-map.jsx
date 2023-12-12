import { motion } from "framer-motion";

const SouqMap = () => {
  return (
    <section className="map-container flex">
      <section className="details">
        {/* <div className='divider'/> */}
        <motion.h1 className="page-subtitle">
          <p>
          <center style={{fontSize:'22px', fontStyle:'italic',fontFamily:'sans-serif'}}> السوق The souq</center> 
            
            The souq has several phases, reflecting Al Zubarah’s settlement
            development. The proximity of the souq to the seafront shows how
            closely connected retail and commerce were to maritime life and
            trade. Areas filled with iron-rich sediments also suggest that
            craft-production such as glass-making or iron-working took place in
            the souq. The souq was abandoned after the attack on Al Zubarah in
            1811. In the time that followed, tents and fishermen’s huts were
            built, and they in turn were replaced by stone houses as Al Zubarah
            was gradually resettled. The souq was rebuilt, but then it covered a
            smaller area to the north. Artefacts such as ceramics and coins,
            among others, helps to reconstruct the sequence of buildings and
            other events that make up the life story of the town. This area
            seems to have remained a focus of activity since the founding of the
            site and is one of Al Zubarah’s most complex archaeological areas,
            with many layers of occupation, abandonment and reoccupation
            overlaying one another.
          </p>
        </motion.h1>
      </section>

      <section className="map2">
        <motion.section
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="map2"
        >
          <iframe
            className="frame-map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d716.2171879634423!2d51.027403648853884!3d25.983217444334212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2sqa!4v1699096383286!5m2!1sar!2sqa"
          ></iframe>
          {/* width="500" height="500" */}
        </motion.section>
      </section>
    </section>
  );
};

export default SouqMap;
