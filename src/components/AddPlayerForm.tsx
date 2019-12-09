import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from 'react-router-dom'
import { drawState } from "../store/draw/types"
import { addPlayerAction } from "../store/draw/actions";
import { AppState } from "../store";
import DisplayAlertModal, {alertInterface} from "./DisplayAlertModal";
import "./css/AddPlayerForm.css";

interface AddPlayerFormProps {
    drawState: drawState;
    addPlayerAction: typeof addPlayerAction;
  }


class AddPlayerForm extends React.Component<AddPlayerFormProps, { name: string, haveSpouse: boolean, spouseId:string | undefined,alert:alertInterface}>{
    constructor(props: AddPlayerFormProps) {
        super(props);
        this.state = {
            name: '',
            haveSpouse: false,
            spouseId: undefined,

            alert : {
                showAlert: false,
                text: "",
                id:undefined
            }

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
            if(!this.props.drawState.isDrawPerformed){
                this.props.addPlayerAction(this.state.name,this.state.haveSpouse,this.state.spouseId)
             } 

            this.setState({name: "",
                    haveSpouse: false,
                    spouseId: undefined,
                    alert : { 
                        showAlert: true,
                        text: "Thank you " + this.state.name + " for your participation",
                        id: 0}
                })


        }else{

            this.setState({
                alert : { 
                showAlert: true,
                text: "Please enter a name before submit",
                id: 1}
                });
        }
        event.preventDefault();
      }

      closeModal = () => {
        this.setState(             {
             alert : { 
            showAlert: false,
            text: "",
            id: this.state.alert.id
        }
            });
      };

    render() {
        if(this.state.alert.id === 0 && !this.state.alert.showAlert){
            return <Redirect to='/'/>;
        }
    return (
        
        <div className="add-Player-bg"> 

            <div>
                <div className="register-title">Register to the <br />
                    <span className="robinson" > Robinson</span> 
                    secret santa
                </div>
            </div>
            <form className="register-form">
                <div>
                    <label>
                        Name:
                        <input className="form-input" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                    </label>
                </div>
                <div className="married-contener">
                    <label>
                        Are you married ? 
                        <input className="checkbox"
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
                            <select className="selectSpouse"name="selectSpouse" onChange={this.handleSelectChange}>
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
             
                <div className="form-sumbit">
                    <input className="blue-button" type="submit" value="Submit" onClick={this.handleSubmit}/>
                </div>
            </form>
            <Link className="backHome"to="/">Return</Link>
            <DisplayAlertModal onClose={this.closeModal} show={this.state.alert.showAlert}>{this.state.alert.text}</DisplayAlertModal>

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