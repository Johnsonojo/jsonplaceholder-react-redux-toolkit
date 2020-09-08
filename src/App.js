import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Counter from "./pages/Counter";
import Posts from "./pages/Posts";
import Users from "./pages/Users";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Users />
          </Route>

          <Route exact path="/posts">
            <Posts />
          </Route>

          <Route exact path="/counter">
            <Counter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
