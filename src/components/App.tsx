import React, { Component } from "react";
import Home from './Home';
import AddPlayer from './AddPlayer';
import PlayerMatch from './PlayerMatch';
import { BrowserRouter as Router, Route } from "react-router-dom";

interface Player {
  readonly id: number;
  readonly Name: String;
  readonly spouseId: number;
  matchId: number;
}

class AppRouter extends Component {
  render() {
    return (
    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/addPlayer" component={AddPlayer} />
      <Route path="/playerMatch" component={PlayerMatch} />
    </Router>
    );
  }
}
 
export default AppRouter;