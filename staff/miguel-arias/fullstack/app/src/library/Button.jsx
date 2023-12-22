function Button({className, onClick, type, children}) {
    return <button className={`button ${className ? className : ''}`} onClick={onClick} type={type}>{children}</button>
}

export default Button