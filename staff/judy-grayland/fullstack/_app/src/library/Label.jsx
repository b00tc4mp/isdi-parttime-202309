function Label(props) {
    return <label className="label" htmlFor={props.forId} type={props.type} id={props.id}>{props.children}</label>
}

export default Label