import CompB from "./CompB";
import React,{useState, createContext} from "react";

export const UserContext = createContext();

function CompA(){
    const [user,setUser] = useState("BroCode");

    return(
        <div className="box">
            <h2>CompA</h2>
            <h3>{`Hello ${user}`}</h3>
            <UserContext.Provider value={user}>
                <CompB user={user}></CompB>

            </UserContext.Provider>
        </div>
    );
}

export default CompA