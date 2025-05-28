import "../css/todo.css"

function TodoDetails(){
    return(
        <>
            <div className="wrapper">
                <div className="desc">
                    <h2>Description</h2>
                    <p>this is a simple text</p>
                </div>
                <div className="tags">
                    <h2>Tags</h2>
                    <button>H</button>
                </div>
                <div className="status">
                    <h2>Status</h2>
                    <p>completed</p>
                </div>
                <div className="action">
                    <h2>Action</h2>
                    <button>Delete</button>
                </div>
            </div>
        </>
    )
}
export default TodoDetails