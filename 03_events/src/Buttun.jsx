
function Button(){

    let count = 0;
    const wcisniecie = (name) =>{
        if(count < 3){
            count++;
            console.log(`${name} wcisnieto ${count}`);
        }else{
            console.log(`${name} wystarczy`);
        }
    };

    const handleCLick = () => {
        console.log("klikniete");
    };

    const handleClick2 = (name) => {
        console.log(`${name} nie klikaj`);
    };


    const handelClickEvent = (event) => {
        //console.log(event);
        event.target.textContent = "zmiana tekstu"
    }
    //return(<button onClick={() => handleClick2("test")}>Click me</button>)

    //return(<button onClick={() => wcisniecie("test")}>Klikni mnie</button>);

    return(<button onClick={(e) => handelClickEvent(e)}>Klikni mnie</button>);
}

export default Button