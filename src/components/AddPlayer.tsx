import React from "react";
import { Link } from 'react-router-dom'

class AddPlayer extends React.Component{


    render() {
    return (
        <div> 
            <div>
                <h2>Here you can add a player</h2>
            </div>
            <form>
                <div>
                    <label>
                        Name:
                        <input type="text"  />
                    </label>
                </div>
                <div>
                    <label>
                        Are you married ? 
                        <input
                            name="isGoing"
                            type="checkbox" />
                    </label>
                </div>
                <div>
                    <label>
                        Who are you married to ?
                        <select >
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <Link to="/">back home</Link>
        </div>
      );
    }
}
 

export default AddPlayer;
