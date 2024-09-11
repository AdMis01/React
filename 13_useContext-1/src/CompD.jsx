import React,{useContext} from "react";
import { UserContext } from "./CompA";


function CompD(){

    const user = useContext(UserContext);

    return(
        <div className="box">
            <h2>CompD</h2>
            <h3>{"witam " + user}</h3>
        </div>
    );
}

export default CompD