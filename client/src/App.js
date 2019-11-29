import React from "react";
import "./App.scss";

import { Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { MemberDetails } from "./pages/MemberDetails";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div className="App animated fadeIn">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/members/:memberId" component={MemberDetails} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
