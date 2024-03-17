function Input({ id, type, value, placeholder }) {
	return <input className="input" type={type} id={id} defaultValue={value} placeholder={placeholder} />
}

export default Input