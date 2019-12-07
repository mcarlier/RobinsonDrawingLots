import React from "react";
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div> 
            <h1>Welcome home</h1>
            <div> 
            <Link to="/AddPlayerForm"> Add player</Link>
            </div>
            <div> 
                <Link to="/playerMatch">See player Match</Link>
            </div> 
        </div>
    );
}
 
export default Home;