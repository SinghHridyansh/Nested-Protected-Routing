import { React, useState, useContext } from "react";
import { AuthContext } from "./Context";
import "../Components/login.css";

const Login = (props) => {
  const { setisloggedin } = useContext(AuthContext);
  const [user, setuser] = useState({ name: "", password: "" });

  const handleAuth = () => {
    if (user.name === "Hridyansh" && user.password === "1234") {
      setisloggedin(true);
    } else {
      alert("Enter Proper Credentials");
    }
  };
  return (
    <div className="login">
      <h3>LogIn Component</h3>
      <div>
        <input
          type="text"
          placeholder="User Name"
          onChange={(e) => {
            setuser({ ...user, name: e.target.value });
          }}
        />
      </div>
      <br />
      <div>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setuser({ ...user, password: e.target.value });
          }}
        />
      </div>
      <br />
      <div>
        <button onClick={handleAuth}>LogIn</button>
      </div>
      <div>Hridyansh 1234</div>
    </div>
  );
};

export default Login;
