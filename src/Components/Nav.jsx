import { React, useContext } from "react";
import { AuthContext } from "./Context";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "../Components/Nav.css";

const Nav = (props) => {
  const { setisloggedin } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
      <div className="nav">
        <div>
          <h2>Insert logo here</h2>
        </div>
        <div className="links">
          <Link to="/" className="linkseach">
            Home
          </Link>
          <Link to="/Technologies" className="linkseach">
            Technologies/Internal Routing
          </Link>
          <Link to="/Support" className="linkseach">
            Support
          </Link>

          <button
            onClick={() => {
              setisloggedin(false);
              navigate("/");
            }}
            className="navlogout"
          >
            LogOut
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Nav;
