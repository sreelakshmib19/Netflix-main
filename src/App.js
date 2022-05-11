import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Series from "./components/Series";
import Errorpage from "./components/Errorpage";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/Series" element={<Series />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route
            path="/Signinerror"
            element={
              <Errorpage title="Signup Error" message="Error in signup" />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
