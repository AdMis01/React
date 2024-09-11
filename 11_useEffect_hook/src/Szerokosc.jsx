import React,{useState,useEffect} from "react";

function Szerokosc(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    //window.addEventListener("resize",handleResize);// za kazdym razem jak sie odswierza to sie wykojune okolo 1000 razy

    useEffect(() => {
        window.addEventListener("resize",handleResize); 
        console.log("test");
        return() => {
            window.removeEventListener("resize", handleResize);
            console.log("usuniecie testu");
        };
    },[]);

    useEffect(() =>{
        document.title = `Size: ${width} x ${height}`;
    }, [width,height]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(<>
        <p>Widow Width: {width}</p>
        <p>Wndow Height: {height}</p>
    </>);
}

export default Szerokosc