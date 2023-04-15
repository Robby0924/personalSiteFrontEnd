import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./CSS/navbar.css";

const Header = () => {
  return (
    <>

      <div className="navButtonGroup">
        {/*-----------HOME-----------*/}
        <div>
          <Link to={"/"}>
            <button className="mainButton">RB</button>
          </Link>
        </div>

        <div className="rightNavButtonGroup">
          {/*-----------ABOUT-----------*/}
          <div>
            <Link to={"/about"}>
              <button className="navButton">About</button>
            </Link>
          </div>

          {/*-----------WEB DEV-----------*/}
          <div>
            <Link to={"/web_development"}>
              <button className="navButton">Web Development</button>
            </Link>
          </div>

          {/*-----------ARCHI-----------*/}
          <div>
            <Link to={"/architecture"}>
              <button className="navButton">Architecture</button>
            </Link>
          </div>

          {/*-----------Contact-----------*/}
          <div>
            <Link to={"/contact"}>
              <button className="navButton">Contact</button>
            </Link>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};
export default Header;
