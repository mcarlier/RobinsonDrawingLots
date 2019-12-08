import React from "react";
import { Link } from 'react-router-dom'

interface HomeProps {
    isDrawPerformed: boolean;
    performDraw: () => void;
    getMatchPlayerName: (name: string) => string;
    resetDraw: () => void;
  }


class Home extends React.Component<HomeProps, {name: string , match_name: string}>{
    constructor(props: HomeProps) {
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
        const type: string = event.currentTarget.title;
        switch(type) { 
            case "reset": { 
                this.props.resetDraw()
                break; 
            } 
            case "perform_draw": { 
                this.props.performDraw()
                break; 
            } 
            default: { 
               break; 
            } 
         }
      }
      handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({name: event.target.value});
      }

      handleSubmit(event: { preventDefault: () => void; }) {
        let match = this.props.getMatchPlayerName(this.state.name)
        if(!this.state.name){
            alert('Please enter a name to see a match.')
            return
        }
        if(match){
            this.setState({match_name: match});
        }else{
            alert('Sorry ' + this.state.name + ("\n We could not find your match.\n Are you sure you spelled your name correctly?"));

        }

        event.preventDefault();
      }
    render() {
        if(!this.props.isDrawPerformed){
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
                </div>
            );
        }else{
            return (
            <div> 
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
            </div>
            );
        }
    }
}
export default Home;
