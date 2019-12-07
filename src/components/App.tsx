import React from "react";
import { connect } from "react-redux";
import { AppState } from "../store";

import Home from './Home';
import AddPlayerForm from './AddPlayerForm';
import PlayerMatch from './PlayerMatch';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { PlayersState } from "../store/draw/types";
import { addPlayer } from "../store/draw/actions";


interface AppProps {
  addPlayer: typeof addPlayer;
  playersState: PlayersState;
}

class App extends React.Component<AppProps>{

  addPlayer = (name: string, haveSpouse:boolean, spouseId:number | undefined) => {
    this.props.addPlayer(name,haveSpouse,spouseId)
  };
  render() {
    return (
      <Router>        
        <Route path="/AddPlayerForm" render={(props) => <AddPlayerForm players = {this.props.playersState.players} addPlayer = {this.addPlayer} />}/>
        <Route path="/" exact component={Home}/>
        <Route path="/playerMatch" component={PlayerMatch} />
      </Router>

    );
  }
}
 
const mapStateToProps = (state: AppState) => ({
  playersState: state.draw
});

export default connect(
  mapStateToProps,
  { addPlayer }
)(App);


