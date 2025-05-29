import "../css/todo.css"


function TodoDetails(){
    return(
        <>
            <div className="wrapper">
                <table>
                    <tr>
                        <th>Description</th>
                        <th>Tags</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>This is a simple task</td>
                        <td><button className="btn">Html</button></td>
                        <td>Completed</td>
                        <td><button className="btn">Delete</button></td>
                    </tr>
                    
                </table>
            </div>
        </>
    )
}
export default TodoDetails