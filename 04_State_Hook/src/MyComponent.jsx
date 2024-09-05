import React, {useState} from "react";

function MyComponent(){
    //let [name,setName] = useState();
    const [name,setName] = useState("Guset");//ustawania default wartosci
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const updateName = () => {
         setName("wiadomosc");
    }


    const wiek = () => {
        setAge(age + 1 );
    }

    const toggleEmSttus = () => {
        setIsEmployed(!isEmployed)
    }

    return(<div>
        <p>Name {name}</p>
        <button onClick={updateName}>Przycisk</button>

        <p>Age {age}</p>
        <button onClick={wiek}>Przycisk</button>

        <p>zatrudnienie {isEmployed ? "tak" : "nie"}</p>
        <button onClick={toggleEmSttus}>Przycisk</button>
    </div>);
}

export default MyComponent