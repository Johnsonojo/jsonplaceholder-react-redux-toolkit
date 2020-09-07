import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Counter from "./pages/Counter";
import Users from "./pages/Users";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Users />
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
