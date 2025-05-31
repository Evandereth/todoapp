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

    function selecTag(tag){
        if(todos.tags.some(item=> item === tag)){
            const filterTag = todos.tags.filter(item => item !== tag)
            setTodos(prev =>{
                return({...prev, tags:filterTag})
            })
        }else{
            setTodos(prev => {
                return({...prev, tags:[...prev.tags, tag]})
            })
        }
    }
    console.log(todos.tags)
    

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
                    <Button title="HTML" clickTag={selecTag}/>
                    <Button title="CSS" clickTag={selecTag}/>
                    <Button title="JavaScript" clickTag={selecTag}/>
                    <Button title="ReactJs" clickTag={selecTag}/>
                </div>
            </form>
        </>
    )
}

export default TodoForm