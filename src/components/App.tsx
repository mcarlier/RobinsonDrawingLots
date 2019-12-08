import React from "react";
import { connect } from "react-redux";
import { AppState } from "../store";

import Home from './Home';
import AddPlayerForm from './AddPlayerForm';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { drawState } from "../store/draw/types";

interface AppProps {
  drawState: drawState;
}

class App extends React.Component<AppProps>{

  render() {
    return (
      <Router> 
        <Route path="/AddPlayerForm" render={(props) => <AddPlayerForm/>}/>
        <Route path="/" exact render={(props) => <Home isDrawPerformed = {this.props.drawState.isDrawPerformed}/>}/>
      </Router>

    );
  }
}
 
const mapStateToProps = (state: AppState) => ({
  drawState: state.draw
});

export default connect(
  mapStateToProps,
  {}
)(App);
