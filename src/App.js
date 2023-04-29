import "./App.css";
import Nav from "./Components/Nav";
import Login from "./Components/login";
import Home from "./Components/home";
import Support from "./Components/Support";
import Technologies from "./Components/Technologies";
import Notfound from "./Components/Notfound";
import Htmlpage from "./Components/htmlpage";
import Csspage from "./Components/csspage";
import Jspage from "./Components/jspage";
import Reactpage from "./Components/reactpage";
import { useContext } from "react";
import { AuthContext } from "./Components/Context";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const { isloggedin } = useContext(AuthContext);
  return (
    <div className="App">
      {isloggedin ? (
        <BrowserRouter>
          <div>
            <Nav />
            <Routes>
              <Route
                path="/"
                element={isloggedin ? <Home /> : <Navigate to="/" />}
              />

              <Route
                path="/Support"
                element={isloggedin ? <Support /> : <Navigate to="/" />}
              />
              <Route
                path="/Technologies"
                element={isloggedin ? <Technologies /> : <Navigate to="/" />}
              >
                <Route path="" element={<Navigate to="html" />} />
                <Route
                  path="html"
                  element={isloggedin ? <Htmlpage /> : <Navigate to="/" />}
                />
                <Route
                  path="css"
                  element={isloggedin ? <Csspage /> : <Navigate to="/" />}
                />
                <Route
                  path="js"
                  element={isloggedin ? <Jspage /> : <Navigate to="/" />}
                />
                <Route
                  path="react"
                  element={isloggedin ? <Reactpage /> : <Navigate to="/" />}
                />
              </Route>

              <Route
                path="*"
                element={isloggedin ? <Notfound /> : <Navigate to="/" />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      ) : (
        <Login />
      )}
    </div>
  );
}
export default App;
