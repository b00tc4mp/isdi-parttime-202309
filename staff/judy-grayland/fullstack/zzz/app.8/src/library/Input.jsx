function Input (props) {
    return <input className = "input" type={props.type || "text"} id={props.id}/>
}

export default Input