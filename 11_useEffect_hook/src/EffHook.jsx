import React,{useState,useEffect} from "react"

//useEffect() wykonywanie dodatkowego kodu w miedzy czasie wykonywanego innego 

//useEffect(function, [dependencies]) -zależności

//useEffect(() => {}) - uruchamia przy kazdym ponownym wyrenderowaniu
//useEffect(() => {}, []) wykonaj ten kod tylko raz 
//useEffect(() => {}, [value]) wykonaj tylko raz gdy wartosc sie zmieni 

function EffHook(){
    const [count,setCount] = useState(0);
    const [color,setColor] = useState("green");
    //useEffect(() => {
    //    document.title = "Count " + count;//aktualicuzje sie za kazdym razem 
    //})
    //useEffect(() => {
    //    document.title = "Count " + count;//aktualicuzje sie tylko raz
    //}, [])

    //useEffect(() => {
    //    document.title = "Count " + count + " kolor: " + color;//wykona sie za kazdym razem gdy nasza zmienna zostanie zmieniona
    //},[count,color]);//jak jedna z nich sie zmieni to zachodzi zmiana/ wykonianie kodu


    useEffect(() => {
        document.title = "Count " + count + " kolor: " + color;

        return () => {
            //some cleanup code - 
        }
    },[count,color]);


    function addCount(){
        setCount(c => c + 1)
    }

    function subtract(){
        setCount(c => c - 1)
    }

    function changeColor(){
        setColor( c => c === "green" ? "red" : "green");
    }

    return(<>
        <p style={{color: color}}>Count {count}</p>
        <button onClick={addCount}>add</button>
        <button onClick={subtract}>usun</button>
        <button onClick={changeColor}>cololur</button>
    </>)
}

export default EffHook