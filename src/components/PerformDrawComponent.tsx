import React from "react";
import { connect } from "react-redux";
import { performDrawAction } from "../store/draw/actions";
import { Link } from 'react-router-dom'
import { AppState } from "../store";


interface PerformDrawComponentProps {
    performDrawAction: typeof performDrawAction;
    players_count:number;
  }

class PerformDrawComponent extends React.Component<PerformDrawComponentProps>{
    constructor(props: Readonly<PerformDrawComponentProps>) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
    handleClick(event: React.MouseEvent<HTMLButtonElement>) {
      switch(this.props.players_count ) {
        case 0:
          alert("Everybody needs to register before performing a draw")

          break;
        case 1:
          alert("There is currently only one participant. There need to be more for a draw to be performed")

          break;
        default:
          this.props.performDrawAction()

      } 
    }
   
  render() {
    return (
         <div> 
            <h1>Welcome home</h1>
            <div> 
            <Link to="/AddPlayerForm"> Add player</Link>
            </div>
            <div> 
            <button title="perform_draw" onClick={this.handleClick}>
                Perform draw
            </button>
            </div> 
        </div>)
  }
}
const mapStateToProps = (state: AppState) => ({
  players_count: state.draw.players.length
});
export default connect(
  mapStateToProps,
  { performDrawAction}
)(PerformDrawComponent);