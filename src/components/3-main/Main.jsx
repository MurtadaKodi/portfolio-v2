import { useState } from "react";
import "./main.css";
import { myProject } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setarr] = useState(myProject);
  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);
    const newArr = myProject.filter((item) => {
      const zzz = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });
      return zzz === buttonCategory;
    });
    setarr(newArr);
  };
  return (
    <main className="flex">
      <section className="left-section flex ">
        <button
          onClick={() => {
            setcurrentActive("all");
            setarr(myProject);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Project
        </button>

        <button
          onClick={() => {
            handleClick("north");
          }}
          className={currentActive === "north" ? "active" : null}
        >
          Northen House
        </button>

        <button
          onClick={() => {
            handleClick("palace");
          }}
          className={currentActive === "palace" ? "active" : null}
        >
          Palace
        </button>

        <button
          onClick={() => {
            handleClick("html");
          }}
          className={currentActive === "html" ? "active" : null}
        >
          Souq
        </button>
      </section>

      <section className="right-section flex  ">

        <AnimatePresence>

        {arr.map((item) => {
          return (
            <motion.article

            layout
            initial={{ transform: 'scale(0)'}}
            animate={{ transform: 'scale(1)'}}
            transition={{type:'spring', damping:8, stiffness:40}}

            key={item.imgPath} className="card ">
              <img width={266} src={item.imgPath} alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title"> {item.projectTitle}</h1>
                <p className="sub-title">hgftdfgghjgcgfyghkfg hhghghfhfh</p>

                {/* <div className="icons flex ">

                  <div style={{ gap: "11px" }} className="flex">
                    <a href="#">
                      <div className="icon-link"></div>
                    </a>
                    <div className="icon-youtube-play"></div>
                  </div>

                  <div>
                    <a className="link flex" href="#">
                      More
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div> */}
              </div>
            </motion.article>
          );
        })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
