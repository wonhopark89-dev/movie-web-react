import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import { Home } from "./routes/Home";

function App() {
  return (
    <HashRouter>
      {/* <Route path="/home" component={Home} /> */}
      <Route path="/about" exact={true}>
        <h1>about</h1>
      </Route>
      <Route path="/about/zzzz">
        <h1>zzzzzz</h1>
      </Route>
    </HashRouter>
  );
}

export default App;
