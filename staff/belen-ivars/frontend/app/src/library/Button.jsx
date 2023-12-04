function Button({ type, onClick, children }) {
	return <button className="button" type={type} onClick={onClick}>{children}</button>
}

export default Button