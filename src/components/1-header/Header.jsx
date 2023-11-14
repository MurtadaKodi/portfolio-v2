import { useEffect, useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className="flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      >
        {" "}
      </button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/north">Northen House</NavLink>
          </li>
          <li>
            <NavLink to="/south">Palace</NavLink>
          </li>
          <li>
            <NavLink to="/souq">Souq</NavLink>
          </li>

          <li>
            <NavLink to="/Page4">Page4</NavLink>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          // send to local storage
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          // get value from local storage
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-brightness-up"></span>
        )}
      </button>

      {showModal && (
        <div className="fixed ">
          <ul className="modal ">
            <li>
              <button
                className="icon-clear"
                onClick={() => {
                  setshowModal(false);
                }}
              ></button>
            </li>
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/north">Northen House</NavLink>
            </li>
            <li>
            <NavLink to="/south">Palace</NavLink>
            </li>
            <li>
            <NavLink to="/souq">Souq</NavLink>
            </li>
            <li>
            <NavLink to="/Page4">Page4</NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
