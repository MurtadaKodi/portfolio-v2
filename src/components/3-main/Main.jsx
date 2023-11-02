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
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          Css
        </button>

        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>

        <button
          onClick={() => {
            handleClick("html");
          }}
          className={currentActive === "html" ? "active" : null}
        >
          Html
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

                <div className="icons flex ">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-youtube-play"></div>
                  </div>

                  <a className="link flex" href="#">
                    More
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
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
