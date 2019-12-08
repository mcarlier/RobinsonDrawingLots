import React from "react";
import Home from './Home';
import AddPlayerForm from './AddPlayerForm';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component{
  render() {
    return (
      <Router> 
        <Route path="/AddPlayerForm" render={(props) => <AddPlayerForm/>}/>
        <Route path="/" exact render={(props) => <Home/>}/>
      </Router>

    );
  }
}

export default App
