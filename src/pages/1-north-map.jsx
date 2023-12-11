import { motion } from "framer-motion";

const NorthMap = () => {
  return (
    <section className="map-container " style={{ display: "flex" }}>
      <section className="">
        {/* <div className='divider'/> */}
        <motion.h1>
          <p className="page-subtitle">
            <center > <h2>البيت الشمالي al-bait al-shimali</h2></center> 
            In the northeastern part of the town is located a large courtyard
            house, so-called Northern House البيت الشمالي al-bait al-shimali
            . The house is preserved in two different phases. In the early phase
            the rectangular building measures ca. 106 m x 45 m , is mainly built
            with limestones and beachrocks, A portico is commonly found along
            the southern length of the courtyards providing a shaded area.
            Entrance halls are often elaborated using gypsum plastered interior
          </p>
          <section>
          <p className="page-subtitle">
            walls and decorative elements in the plaster of door frames. A sharp
            bend at the end of the hall ensured that the courtyard areas were
            shielded from direct view, either from the hallway or from the
            street outside Other common rooms are hammams, rooms used for
            reception, cooking, and food preparation area, and for storage. In
            the late phase the building is strongly reduced in size in
            comparison to the older phase . The late Northern House is built on
            top of the western half of the previous building re-using several
            main walls;
          </p>
          </section>
            
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
            className="frame-map "
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d716.2171879634423!2d51.027403648853884!3d25.983217444334212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2sqa!4v1699096383286!5m2!1sar!2sqa"
          ></iframe>
          {/* width="500" height="500" */}
        </motion.section>
      </section>
    </section>
  );
};

export default NorthMap;
