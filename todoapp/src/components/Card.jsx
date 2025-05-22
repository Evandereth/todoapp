import TodoCard from "./TodoCard";
import "../css/card.css"
function Card({title, items, status, handleDelete}){
    return(
        <>
        <div className="card">
            <header>
                <h1>
                    {title}
                </h1>
            </header>

            {
                items.map((item, index) => item.todoStatus === status &&
                <TodoCard 
                    key={index}
                    title={item.todoItem}
                    tags={item.tags}
                    index={index}
                    handleDelete={handleDelete}
                />
            )
            }
        </div>
            
        </>
    )
}

export default Card
