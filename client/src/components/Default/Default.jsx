import React from "react";
import { Link } from "react-router-dom";

const Default = ()=>{
    return <div>
        <h1>Page not found</h1>
        <dir>
            <Link to='/poke/home'>Go to Home</Link>
        </dir>
    </div>
}

export default Default;