function Input({ id, type, value, onChange }) {
    return <input className="input" type={type} id={id} defaultValue={value} onChange={onChange ? onChange : () => {}}/>
}

export default Input