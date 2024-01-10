function Link(props) {
    return <a className="link" onClick={props.onClick} href="#">{props.children}</a>
}

export default Link