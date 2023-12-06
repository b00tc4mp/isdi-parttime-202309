function Link(props) {
    return <a className="link" id={props.id} onClick={props.onClick} href="#">{props.children}</a>
}

export default Link