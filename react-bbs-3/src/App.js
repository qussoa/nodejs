import React from "react";
import "./App.css";
import BbsMain from "./bbs/bbsMain";
import BbsWrite from "./bbs/bbsWrite";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainNav from "./mainNav";

function App() {
  const header_style = {
    marginBottom: 0,
    backgroundColor: "#285943",
    color: "#D7FFF1",
  };
  return (
    <div className="container-fluid">
      <header style={header_style} className="jumbotron text-center">
        <h2>My BBS 2020</h2>
        <p>React &amp; Spring Boot BBS</p>
      </header>
      <Router>
        <MainNav />
        <Route exact path="/" component={BbsMain} />
        <Route path="/bbsWrite" component={BbsWrite} />
      </Router>
    </div>
  );
}

export default App;
