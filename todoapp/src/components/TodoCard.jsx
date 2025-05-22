import Button from "./Button";
import "../css/card.css"
function TodoCard({title, tags, handleDelete, index}){
    return(
        <>
        <div className="theCard">
            <div className="text">
                <p>{title}</p>
            </div>
            <div className="bottomDetails">
                <div className="tags">
                    {
                        tags.map((tag, index) => 
                        <Button
                            key={index}
                            name={tag}
                            selected
                        /> 
                        )
                    }
                </div>
                <div className="deleteBtn">
                    <button onClick={() => handleDelete(index)}>D</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default TodoCard