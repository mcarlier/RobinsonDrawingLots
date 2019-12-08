import React from "react";
import { connect } from "react-redux";
import { resetDrawAction } from "../store/draw/actions";
import { AppState } from "../store";
import { drawState, Player } from "../store/draw/types";
import { getMatchPlayerName } from "../utils/PlayerArrayUtils";


interface DisplayDrawComponentProps {
    drawState: drawState;
    resetDrawAction: typeof resetDrawAction;
  }

class DisplayDrawComponent extends React.Component<DisplayDrawComponentProps,{name: string , match_name: string}>{
    constructor(props: Readonly<DisplayDrawComponentProps>) {
        super(props);
        this.state = {
            name: '',
            match_name: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        this.props.resetDrawAction()
    }
    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({name: event.target.value});
    }
    handleSubmit(event: { preventDefault: () => void; }) {
        let match = getMatchPlayerName(this.state.name,this.props.drawState.players)
        if(match.success){
            this.setState({match_name: match.name});
        }else{
            alert(match.error)
        }
        event.preventDefault();
      }


   
  render() {
    return (
        <div> 
        {console.log(this.props.drawState.players)}
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>
                    What's your name?:
                    <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
            </div>
            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>
        <div>You have to buy a gift to : {this.state.match_name}</div>
            <button title="reset" onClick={this.handleClick}>
                    Reser draw
                </button>
        </div>)
  }
}

const mapStateToProps = (state: AppState) => ({
    drawState: state.draw
  });
  
export default connect(
    mapStateToProps,
  { resetDrawAction}
)(DisplayDrawComponent);