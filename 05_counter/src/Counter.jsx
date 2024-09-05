import React, {useState} from "react"

function Counter(){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrese = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className="container">
            <p className="display-count">{count}</p>
            <button className="increse" onClick={increment}>increse</button>
            <button className="decrese" onClick={decrese}>decrese</button>
            <button className="reset" onClick={reset}>reset</button>
        </div>
    );

}

export default Counter