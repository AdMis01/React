import React, {useState} from "react";

function MyComponent(){
    const [count, setCount] = useState(0);

    const [car, setCar] = useState({year: 2024, make: "Ford",model: "Mustang"});


    const increment = () => {
        setCount(c => c + 1);
        setCount(c => c + 1);
        //setCount(count + 1); nawet jak wiecej dodamy nie zadziala bo nie uaktulanie sie nasza zmianna i caly czas jest 0
    }

    const decrese = () => {
        //setCount(count - 1);

        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(0);
    }

    function handleYearChange(event){
        setCar(c => ({...c,year: event.target.value}));
        //setCar({...car, year: event.target.value});
        //jezeli wartosci maja te same zostanie nadpisane odstanie 

        
    }

    function handleMakeChange(event){
        setCar(c => ({...c,make: event.target.value}));

    }

    function handleModelChange(event){
        setCar(c => ({...c,model: event.target.value}));

    }

    return(
        <>
            <div className="container">
                <p className="display-count">{count}</p>
                <button className="increse" onClick={increment}>increse</button>
                <button className="decrese" onClick={decrese}>decrese</button>
                <button className="reset" onClick={reset}>reset</button>
            </div>
            <div>
                <p>Car {car.year} {car.make} {car.model}</p>
                <input type="number" value={car.year} onChange={handleYearChange}/>
                <input type="text" value={car.make} onChange={handleMakeChange}/>
                <input type="text" value={car.model} onChange={handleModelChange}/>
            </div>
        </>
    );
}

export default MyComponent