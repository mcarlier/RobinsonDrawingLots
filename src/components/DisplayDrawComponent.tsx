import React from "react";
import { connect } from "react-redux";
import { resetDrawAction } from "../store/draw/actions";
import { AppState } from "../store";
import { drawState } from "../store/draw/types";
import { getMatchPlayerName } from "../utils/PlayerArrayUtils";
import DisplayAlertModal, {alertInterface} from "./DisplayAlertModal";
import "./css/DisplayDrawComponent.css";


interface DisplayDrawComponentProps {
    drawState: drawState;
    resetDrawAction: typeof resetDrawAction;
  }

class DisplayDrawComponent extends React.Component<DisplayDrawComponentProps,{name: string , match_name: string,alert:alertInterface}>{
    constructor(props: Readonly<DisplayDrawComponentProps>) {
        super(props);
        this.state = {
            name: '',
            match_name: '',
            alert : {
                showAlert: false,
                text: "",
                id:undefined
            }
        };
        this.resetDraw = this.resetDraw.bind(this);
        this.resetMatch = this.resetMatch.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    resetDraw(event: React.MouseEvent<HTMLButtonElement>) {
        this.props.resetDrawAction()
    }

    resetMatch(event: React.MouseEvent<HTMLButtonElement>) {
        this.setState({
                name:'',
                match_name: ''});
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({name: event.target.value});
    }
    handleSubmit(event: { preventDefault: () => void; }) {
        let match = getMatchPlayerName(this.state.name,this.props.drawState.players)
        if(match.success){
            this.setState({match_name: match.name});
        }else{
            this.setState({
                alert : { 
               showAlert: true,
               text: match.error,
               id: 1
           }});   
        }
         event.preventDefault();
      }
    componentDidMount(){
        if (this.props.drawState.drawIntegrity === false) {
            this.setState({
                alert : { 
               showAlert: true,
               text: "Due to low participation we could not follow all the rules to make the draw.",
               id: 0
           }});       
        }
    }


    closeModal = () => {
        this.setState({
             alert : { 
            showAlert: false,
            text: "",
            id: undefined
        }});
      };

  render() {
    if(this.state.match_name === ""){
        return (        
        <div className="display-draw-container"> 
            <DisplayAlertModal onClose={this.closeModal} show={this.state.alert.showAlert}>{this.state.alert.text}</DisplayAlertModal>
            <form onSubmit={this.handleSubmit} >
                <div>
                    <div className="name-question">
                        What's your name?
                    </div>
                    <div className="display-draw-input">
                        <input className="display-draw-form-input"  name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                    </div>
                </div>
                    <div className="display-draw-submit">
                        <input className="blue-button"type="submit" value="Submit" />
                    </div>
                <div className="display-draw-button-container">
                    <button className="display-draw-reset " title="reset" onClick={this.resetDraw}>
                        Reset draw
                    </button>
                </div>
    
            </form>
        </div>
        )
    }else{
        return (   
        <div className="display-draw-container"> 
            <div className="display-draw-match-txt">You have to buy a gift to 
                <div className="display-draw-match-txt-text">
                {this.state.match_name}
                </div>
            </div>
            <div className="display-draw-ok">
                <button className="blue-button " title="match_ok" onClick={this.resetMatch   }>
                    Ok
                </button>
            </div>
            <div className="display-draw-button-container" >
                <button className="display-draw-reset" title="reset" onClick={this.resetDraw}>
                    Reset draw
                </button>
            </div>
        </div>
        )
    }
  }
}

const mapStateToProps = (state: AppState) => ({
    drawState: state.draw
  });
  
export default connect(
    mapStateToProps,
  { resetDrawAction}
)(DisplayDrawComponent);