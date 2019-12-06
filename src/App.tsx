import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import AddPlayer from './AddPlayer';
import PlayerMatch from './PlayerMatch';


 
function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addPlayer">Add a player!</Link>
            </li>
            <li>
              <Link to="/playerMatch">See player Match</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/addPlayer" component={AddPlayer} />
        <Route path="/playerMatch" component={PlayerMatch} />

      </div>
    </Router>
  );
}
 
export default AppRouter;