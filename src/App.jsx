// import { useState } from 'react'
import "./App.css";
import React from "react";
// import { useState } from 'react'
import NavBar from "./components/navBar/navbar";
import SideBar from "./components/sideBar/sidebar";
import AllSchools from "./components/schools/allSchools/allSchools";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <>
        <NavBar />
        <div className="main">
          <SideBar />
          <div className="all-schools">
          <Switch>
          <Route path="/" exact component={AllSchools} />
          </Switch>
          </div>
        </div>
      </>
    </Router>
  );
}

export default App;
