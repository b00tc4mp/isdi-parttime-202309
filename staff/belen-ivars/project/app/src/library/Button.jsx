function Button({ type, onClick, children, className }) {
	return <button className={`button ${className ? className : ''}`} type={type} onClick={onClick}>{children}</button>
}

export default Button