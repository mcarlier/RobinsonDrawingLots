import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { drawState } from "../store/draw/types"
import { addPlayerAction } from "../store/draw/actions";
import { AppState } from "../store";


interface AddPlayerFormProps {
    drawState: drawState;
    addPlayerAction: typeof addPlayerAction;
  }

class AddPlayerForm extends React.Component<AddPlayerFormProps, { name: string, haveSpouse: boolean, spouseId:string | undefined}>{
    constructor(props: AddPlayerFormProps) {
        super(props);
        this.state = {
            name: '',
            haveSpouse: false,
            spouseId: undefined
            };
        this.handleChange = this.handleChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        switch(event.target.name) { 
            case "name": { 
                this.setState({name: event.target.value});
               break; 
            } 
            case "haveSpouse": { 
                this.setState({haveSpouse: event.target.checked});
               break; 
            } 
            default: { 
               break; 
            } 
         }
      }
      handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
        if(event.target.value === "null"){
            this.setState({spouseId: undefined})
        }else{
            this.setState({spouseId: event.target.value})

        }
      }

      handleSubmit(event: { preventDefault: () => void; }) {
        if(this.state.name){
            alert('A name was submitted: ' + this.state.name + ("\n"));
            this.setState({spouseId: undefined})
            if(!this.props.drawState.isDrawPerformed){
                this.props.addPlayerAction(this.state.name,this.state.haveSpouse,this.state.spouseId)
             }         
        }else{
            alert('Please enter your name before submit');
        }
        event.preventDefault();
      }
    render() {
    return (
        <div> 
            <div>
                <h2>Here you can add a player</h2>
            </div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Are you married ? 
                        <input
                        name="haveSpouse"
                        type="checkbox"
                        checked={this.state.haveSpouse}
                        onChange={this.handleChange} />
                    </label>
                </div>
                {this.state.haveSpouse &&
                    <div>
                        <label>
                            Who are you married to ?
                            <select name="selectSpouse" onChange={this.handleSelectChange}>
                                <option value="null">not Set</option>
                                {
                                this.props.drawState.players.map(p => {
                                    if(p.haveSpouse && p.spouseId === undefined){
                                        return <option key={p.id} value={p.id}>{p.name}</option>
                                    }
                                    return null
                                }
                                )};
                            </select >
                        </label>
                    </div>
                }
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <Link to="/">back home</Link>
        </div>
      );
    }
}

const mapStateToProps = (state: AppState) => ({
    drawState: state.draw
  });
  
export default connect(
    mapStateToProps,
  { addPlayerAction}
)(AddPlayerForm);