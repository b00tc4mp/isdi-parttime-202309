function Link(props) {
	return <a className={`link ${props.className ? props.className : ''}`} href="" onClick={props.onClick}>{props.children}</a>
}

export default Link