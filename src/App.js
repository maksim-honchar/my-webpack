import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Todo from "./features/Todo";
import WatchTodo from "./features/WatchTodo";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Todo} />
        <Route path="/watchtodo" component={WatchTodo} />
      </Switch>
    </Router>
  );
}

export default App;
