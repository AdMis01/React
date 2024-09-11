import CompD from "./CompD";
import React,{useContext} from "react";
import { UserContext } from "./CompA";

function CompC(){
    const user = useContext(UserContext);
    return(
        <div className="box">
            <h2>CompC</h2>
            <h3>{`witam w 3 ${user}`}</h3>
            <CompD></CompD>
        </div>
    );
}

export default CompC