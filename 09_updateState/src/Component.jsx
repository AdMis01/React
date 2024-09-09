import React,{useState} from "react";

function Component(){
    const [cars ,setCars] = useState([]);
    const [carYear,setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        };

        setCars(c => [...c,newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index){
        setCars(c => c.filter((_,i) => i !== index))
    }
    
    function handleChangeYear(event){
        setCarYear(event.target.value);
    }

    function handleChangeMake(event){
        setCarMake(event.target.value);
    }

    function handleChangeModel(event){
        setCarModel(event.target.value);

    }
    return(
        <div>
            <h2>Car objects</h2>
            <ul>
                {cars.map((car,index) => {
                    return <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>
                })}
            </ul>
            <input type="number" value={carYear} onChange={handleChangeYear} /><br></br>
            <input type="text" value={carMake} onChange={handleChangeMake}/><br />
            <input type="text" value={carModel} onChange={handleChangeModel}/>
            <button onClick={handleAddCar}>Dodaj</button>
        </div>
    );

}


export default Component