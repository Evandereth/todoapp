import Button from "./Button"
import "../css/todoform.css"

function TodoForm(){
    return(
        <>
            <form>
                <div className="theTop">
                    <input 
                        type="text"
                        placeholder="Enter Todo here..."
                        name=""
                    />
                    <select
                        name=""
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