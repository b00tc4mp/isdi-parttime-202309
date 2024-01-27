function Form(props) {
    
    return <form className={props.formStyle} onSubmit={props.onSubmit}>{props.children}</form>
}

export default Form