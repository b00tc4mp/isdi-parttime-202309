function Link(props) {
    return <a className="links" href="" onClick={props.onClick}>{props.children}</a>
}

export default Link