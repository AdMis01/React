import React,{useState} from "react"


function ToDoList(){
    
    const [task,setTask] = useState(["obiad do zrobienia","bieganie","praca"]);
    const [newTask,setNewTask] = useState("");

    function handelInputChange(e){
        setNewTask(e.target.value);
    }

    function addTask(){
        //const textTask = document.getElementById("task").value;
        //setTask(t =>[...t,textTask]);

        if(newTask.trim() !== ""){
            setTask(t =>[...t,newTask]);
            setNewTask("");
        }

    }

    function deleteTask(index){
        //setTask(task.slice(index,index)); usuwa wszystkie
        //setTask(c => c.filter((_,i) => i !== index)) to tez dziala i jest tym samym co nizej tylko inaczej napisane

        const updatedTasks = task.filter((_,i) => i !== index);
        setTask(updatedTasks);


    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...task];
            [updatedTasks[index],updatedTasks[index - 1]] = [updatedTasks[index-1],updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < task.length-1){
            const updatedTasks = [...task];
            [updatedTasks[index],updatedTasks[index + 1]] = [updatedTasks[index+1],updatedTasks[index]];
            setTask(updatedTasks);
        }
    }
    
    return(
        <div className="to-do-list">
            <h2>To Do List</h2>
            <div>
                <input type="text" id="task" placeholder="Enter a task..." value={newTask} onChange={handelInputChange}/>
                <button className="addButton" onClick={addTask}>dodaj</button>
            </div>
            <div>
                <ol>
                {task.map((element,index) => {
                    return (<li key={index}>
                        <span>{element}</span>
                        <button className="deleteButton" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move" onClick={() => moveTaskUp(index)}>UP</button>
                        <button className="move" onClick={() => moveTaskDown(index)}>DONW</button>
                    </li>);
                })}
                </ol>
                

            </div>
        </div>
    );
}

export default ToDoList