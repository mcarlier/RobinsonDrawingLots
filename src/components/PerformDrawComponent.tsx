import React from "react";
import { connect } from "react-redux";
import { performDrawAction } from "../store/draw/actions";
import { Link } from 'react-router-dom'


interface PerformDrawComponentProps {
    performDrawAction: typeof performDrawAction;
  }

class PerformDrawComponent extends React.Component<PerformDrawComponentProps>{
    constructor(props: Readonly<PerformDrawComponentProps>) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
    handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        this.props.performDrawAction()
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
 
export default connect(
  null,
  { performDrawAction}
)(PerformDrawComponent);