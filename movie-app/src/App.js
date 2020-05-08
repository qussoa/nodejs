import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";

import Navigation from "./component/Navigation";
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </Router>
  );
}
export default App;
