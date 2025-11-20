import { useState } from 'react'
import './App.css'

function Todo() {
    const [todos, setTodos] = useState([]);

    function addTodoHandler(){
        setTodos([...todos, {
            title: document.getElementById("title").value,
            desc: document.getElementById("desc").value,
            completed: document.getElementById("isCompleted").checked ? "Completed" : "Incomplete"
        }])
    }
    return (
        <>
            <div>
                <input id={"title"} type={"text"} placeholder={"Enter TODO..."}></input>
                <input id={"desc"} type={"text"} placeholder={"Description"}></input>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>status</span>
                    <input id={"isCompleted"} type={"checkbox"} />
                </div>
                <button onClick={addTodoHandler}>Add Todo</button>
            </div>
            <div>
                {JSON.stringify(todos)}
            </div>
        </>
    )
}

export default Todo
