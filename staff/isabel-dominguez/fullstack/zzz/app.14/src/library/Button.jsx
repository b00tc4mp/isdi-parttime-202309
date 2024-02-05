function Button({ className, children, onClick, type }) {
    return <button className={`button ${className ? className : ""}`} onClick={onClick} type={type}>{children}</button>
}

export default Button