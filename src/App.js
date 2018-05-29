import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import View1 from "./views/View1";
import View2 from "./views/View2";
import View3 from "./views/View3";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1>I'm an app</h1>
            <Link to="/">Home</Link>
            <Link to="/view2">View2</Link>
            <Link to="/view3">View3</Link>
          </header>
          <Route exact path="/" component={View1} />
          <Route path="/view2" component={View2} />
          <Route path="/view3" component={View3} />
        </div>
      </Router>
    );
  }
}

export default App;
