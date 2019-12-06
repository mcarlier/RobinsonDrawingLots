import React from "react";
import { Link } from 'react-router-dom'


class PlayerMatch extends React.Component{
    render() {
    return (
        <div> 
            <form>
                <div>
                    <label>
                        What's your name?:
                        <input type="text"  />
                    </label>
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <div>You have to buy a gift to : </div>
            <Link to="/">back home</Link>
        </div>
      );
    }
}
 
export default PlayerMatch;