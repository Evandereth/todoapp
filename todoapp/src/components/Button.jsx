import "../css/button.css"

function Button({name, tagSelect, selected}){
    const tagStyle = {
        HTML :{backgroundColor:"yellow"},
        CSS :{backgroundColor:"green", color:"white"},
        JavaScript :{backgroundColor:"red", color:"white"},
        ReactJS :{backgroundColor:"purple", color:"white"},
        default :{backgroundColor:""}
    }
    return(
        <>
            <button 
                type = "button"
                className="btnTag"
                style={selected ? tagStyle[name] : tagStyle.default}
                onClick={()=>tagSelect(name)}>
            {name}
            </button>
        </>
    )
}
export default Button