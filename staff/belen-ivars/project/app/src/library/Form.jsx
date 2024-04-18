function Form(props) {
	return <form className="form" id={props.id} onSubmit={props.onSubmit}>{props.children}</form>
}

export default Form