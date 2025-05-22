import "../css/todoForm.css";
import Button from "./Button";
import {useState} from "react"; 

function TodoForm({showTodo}){
    const [todoData, setTodo] = useState({
        todoItem: "",
        todoStatus:"todo",
        tags:[]
    })
    //firstly, we create a function that collects the todoItem using onchange() event

    function handleInput(e){
        const {name, value} = e.target;
        setTodo(prev => {
            return({...prev, [name]:value})
        })
    }

    //second, we create a function that collects the SELECTED tags onclick
    function selectTag(tag){
        if(todoData.tags.some(item => item === tag)){
            const filterTag = todoData.tags.filter(item => item !== tag)
            setTodo(prev => {
                return({...prev, tags:filterTag})
            })
        }else{
            setTodo(prev => {
                return({...prev, tags:[...prev.tags, tag]})
            })
        }
    }
    console.log(todoData.tags)

    // lets add some kind of life to the tags. create a function that adds a color the tag if it has been selected/deselected to avoid repetition.
    function showTag(tag){
        return(todoData.tags.some(item => item === tag))
    }



    //this function prevents the page from reloading onsubmit
    const handleSubmit = (e) => {
        e.preventDefault()
        showTodo(prev => {
            return([...prev, todoData])
        })

        setTodo({
            todoItem: "",
            todoStatus:"todo",
            tags:[]
        })
    }
    return(
        <>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="todoItem"
                    value={todoData.todoItem}
                    placeholder="Enter Todo Here..."
                    onChange={handleInput}
                />
                <div className="formButtons">
                    <div className="onclickBtns">
                        <Button name="HTML" tagSelect={selectTag} selected={showTag("HTML")} />
                        <Button name= "CSS" tagSelect={selectTag} selected={showTag("CSS")}/>
                        <Button name= "JavaScript" tagSelect={selectTag} selected={showTag("JavaScript")}/>
                        <Button name= "ReactJS" tagSelect={selectTag} selected={showTag("ReactJS")}/>
                    </div>
                    <div className="options">
                        <select
                            name="todoStatus"
                            value={todoData.todoStatus}
                            onChange={handleInput}
                        >
                            <option value="todo">Todo</option>
                            <option value="ongoing">Ongoing</option>
                            <option value="complete">Completed</option>
                        </select>
                    </div>
                    <div className="submitBtn">
                        <button className="submit">Add Task</button>
                    </div>
                </div>
            </form>
        </>
    )
}
export default TodoForm;