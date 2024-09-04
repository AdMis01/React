

function List(){
    
    //const fruits = ["apple","orange","banana","coconut","pineapple"];
    const fruits = [{id: 1,name: "apple", calories: 95},
        {id: 2,name: "orange", calories: 45},
        {id: 3,name: "banana", calories: 105},
        {id: 4,name: "coconut", calories: 159},
        {id: 5,name: "pineapple", calories: 37}];
    //fruits.sort();

    //fruits.sort((a,b)=>{
    //    return a.name.localeCompare(b.name); ALFATETYCZNIE
    //});

    //fruits.sort((a,b)=>{
    //    return b.name.localeCompare(a.name); REVERSE ALFABETYCZNIE
    //});

    //fruits.sort((a,b) => {
    //    return a.calories - b.calories; OD NAJMNIEJSZEJ 
    //});

    //fruits.sort((a,b) => {
    //    return b.calories - a.calories; OD NAJWIEKSZEJ
    //});
    
    const maloCal = fruits.filter((owoc) =>{
        return owoc.calories < 100;
    });

    const listItems = fruits.map((item) => {
        return <li key = {item.name}>{item.name}: &nbsp;
        <b>{item.calories}</b></li>;
    });
    const listItemsMaloCal = maloCal.map((item) => {
        return <li key = {item.name}>{item.name}: &nbsp;
        <b>{item.calories}</b></li>;
    });

    return(<ol>{listItemsMaloCal}</ol>);
}

export default List