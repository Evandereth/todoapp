import "../css/button.css"
function Button({title, clickTag}){
    return(
        <>
            <button onClick={()=>clickTag(title)}>{title}</button>
        </>
    )
}

export default Button