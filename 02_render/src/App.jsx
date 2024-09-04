import Student from "./Student"
import UserGreeting from "./UserGreeting"
import List from "./List"
import List2 from "./List2"

function App() {
  
  const fruits = [{id: 1,name: "apple", calories: 95},
    {id: 2,name: "orange", calories: 45},
    {id: 3,name: "banana", calories: 105},
    {id: 4,name: "coconut", calories: 159},
    {id: 5,name: "pineapple", calories: 37}];

    const vegetables = [{id: 6,name: "potators", calories: 110},
      {id: 7,name: "celery", calories: 15},
      {id: 8,name: "carrots", calories: 25},
      {id: 9,name: "corn", calories: 63},
      {id: 10,name: "broccoli", calories: 50}];
  
  return (
    <>
      <Student name="Spanie" age={30} isStudent = {true}></Student>
      <Student name="korzystaj" age={21} isStudent = {false}/>
      <Student></Student>
      <UserGreeting isLoggedIn = {true} username = "Ghost"></UserGreeting>
      <List></List>

      {fruits.length > 0 ? <List2 items={fruits} category="Fruits"></List2> : null}
      {vegetables.length > 0 && <List2 items={vegetables} category="Vegetetables"></List2>}
      {
        //to jest to samo ten sam wynik a mniej do pisania zeby nie zwracac nie potrzenie null
      }
      
    </>
  );
}

export default App
