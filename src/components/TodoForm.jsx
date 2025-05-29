import Button from "./Button"
import "../css/todoform.css"
import { useState } from "react"

function TodoForm(){ 
    const [todos, setTodos] = useState({
        item:"",
        status:"incomplete",
        tags:[]
    })

    //firstly, we handle the input details
    function handleInput(e){
        const {name, value} = e.target
        setTodos(prev =>{
            return({...prev, [name]:value})
        })
        console.log(name, value)
    }
    

    //this function prevents the submit from refresh on submit
    function handleSubmit(e){
        e.preventDefault()
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="theTop">
                    <input 
                        type="text"
                        placeholder="Enter Todo here..."
                        name="item"
                        value={todos.item}
                        onChange={handleInput}
                    />
                    <select
                        name="status"
                        value={todos.status}
                        onChange={handleInput}
                    >
                    <option value="incomplete">Incomplete</ option>
                        <option value="ongoing">Ongoing</option>
                        <option value="completed">Completed</   option>
                    </select>
                    <button>Add Task</button>
                </div>
                <div className="theTags">
                    <Button title="HTML"/>
                    <Button title="CSS"/>
                    <Button title="JavaScript"/>
                    <Button title="ReactJs"/>
                </div>
            </form>
        </>
    )
}

export default TodoForm