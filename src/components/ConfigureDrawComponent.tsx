import React from "react";
import { connect } from "react-redux";
import { performDrawAction } from "../store/draw/actions";
import { Link } from 'react-router-dom'
import { AppState } from "../store";
import DisplayAlertModal, {alertInterface} from "./DisplayAlertModal";
import "./css/ConfigureDrawComponent.css";
import "./css/buttons.css";

interface ConfigureDrawComponentProps {
    performDrawAction: typeof performDrawAction;
    players_count:number;
  }

class ConfigureDrawComponent extends React.Component<ConfigureDrawComponentProps,{alert:alertInterface}>{
    constructor(props: Readonly<ConfigureDrawComponentProps>) {
        super(props);
        this.handleClick = this.handleClick.bind(this);        
      
        this.state = {
          alert : {
              showAlert: false,
              text: "",
              id:undefined
          }
      };

      }
      handleClick(event: React.MouseEvent<HTMLButtonElement>) {
      switch(this.props.players_count ) {
        case 0:
          this.setState({
            alert : { 
            showAlert: true,
            text: "Everybody needs to register before performing a draw",
            id: 1}
            });
          break;
        case 1:
          this.setState({
            alert : { 
            showAlert: true,
            text: "There is currently only one participant. There need to be more for a draw to be performed",
            id: 1}
            });
          break;
        default:
          this.props.performDrawAction()

      } 
    }
    closeModal = () => {
      this.setState(             {
           alert : { 
          showAlert: false,
          text: "",
          id: undefined
      }
          });
    };
  render() {
    return (
         <div> 
            <DisplayAlertModal onClose={this.closeModal} show={this.state.alert.showAlert}>{this.state.alert.text}</DisplayAlertModal>
            <div className="text-container">
              <div>Welcome to the</div>
              <div className="host-name">
                    <span>R</span>
                    <span>o</span>
                    <span>b</span>
                    <span>i</span>
                    <span>n</span>
                    <span>s</span>
                    <span>o</span>
                    <span>n</span>
                    <span className="secret">   secret</span>
              </div>
              <div>santa.</div>
            </div>
            <div className="configure-draw-buttons-section">
              <Link className="red-button" to="/AddPlayerForm">
                  Add a participant
              </Link>
              <button className="blue-button" title="perform_draw" onClick={this.handleClick}>
                  Start draw
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
)(ConfigureDrawComponent);