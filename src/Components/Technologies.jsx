import React from "react";
import "../Components/Tech.css";

import { Link, Outlet } from "react-router-dom";
import html from "./htmlpage";

const Technologies = () => {
  return (
    <div className="techContainer">
      <div className="techleftpanel">
        <Link to="html" className="techlinks">
          HTML
        </Link>
        <Link to="css" className="techlinks">
          CSS
        </Link>
        <Link to="js" className="techlinks">
          Javascript
        </Link>
        <Link to="react" className="techlinks">
          React
        </Link>
      </div>
      <div className="techrightpanel">
        <Outlet />
      </div>
    </div>
  );
};

export default Technologies;
