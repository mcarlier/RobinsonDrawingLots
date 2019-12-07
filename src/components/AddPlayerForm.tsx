import React from "react";
import { Link } from 'react-router-dom'
import { Player } from "../store/draw/types"


interface AddPlayerFormProps {
    players: Player[];
    addPlayer: (name: string, spouseId:number | undefined) => void;
  }

class AddPlayerForm extends React.Component<AddPlayerFormProps, { name: string, haveSpouse: boolean, spouseId:number | undefined}>{
    constructor(props: AddPlayerFormProps) {
        super(props);
        this.state = {
            name: '',
            haveSpouse: false,
            spouseId: undefined
            };
        this.handleChange = this.handleChange.bind(this);
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

      handleSubmit(event: { preventDefault: () => void; }) {
        if(this.state.name){
            alert('A name was submitted: ' + this.state.name + ("\n"));
            this.props.addPlayer(this.state.name,this.state.spouseId)
            console.log(this.props.players)
            

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
                            <select >
                                <option value="notSet">not Set</option>
                                <option value="lime">Lime</option>
                                <option value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
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
 

export default AddPlayerForm;
