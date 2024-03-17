import Label from "./Label";
import Input from "./Input";


function Field({ id, children, type, value, placeholder }) {
	return <>
		<Label forId={id}>{children}</Label>
		<Input id={id} type={type || "text"} value={value} placeholder={placeholder} />
	</>
}

export default Field