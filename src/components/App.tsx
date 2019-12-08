import React from "react";
import { connect } from "react-redux";
import { AppState } from "../store";

import Home from './Home';
import AddPlayerForm from './AddPlayerForm';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { drawState } from "../store/draw/types";
import { addPlayer, performDrawAction, resetDrawAction } from "../store/draw/actions";


interface AppProps {
  addPlayer: typeof addPlayer;
  drawState: drawState;
  performDrawAction: typeof performDrawAction;
  resetDrawAction: typeof resetDrawAction;
}

class App extends React.Component<AppProps>{

  addPlayer = (name: string, haveSpouse:boolean, spouseId:number | undefined) => {
    this.props.addPlayer(name,haveSpouse,spouseId)
  };
  performDraw = () => {
    this.props.performDrawAction()
};

getMatchPlayerName = (name: string) =>  {
      let player = this.props.drawState.players.find(p => p.name === name)
      if(player  !==  undefined){
        let id = player.id
        let match = this.props.drawState.players.find(p => p.matchId === id)
        if(match  !==  undefined){
          return match.name
        }else{
          return "this will work when the algorithm is complete."
        }
      }
      return ''
};
resetDraw = () => {
  this.props.resetDrawAction()
};



  
  render() {
    return (
      <Router> 
        <Route path="/AddPlayerForm" render={(props) => <AddPlayerForm players = {this.props.drawState.players} addPlayer = {this.addPlayer} />}/>
        <Route path="/" exact render={(props) => <Home isDrawPerformed = {this.props.drawState.isDrawPerformed}
           performDraw = {this.performDraw}
           getMatchPlayerName = {this.getMatchPlayerName}
           resetDraw = {this.resetDraw} />}/>
      </Router>

    );
  }
}
 
const mapStateToProps = (state: AppState) => ({
  drawState: state.draw
});

export default connect(
  mapStateToProps,
  { addPlayer, performDrawAction , resetDrawAction}
)(App);
