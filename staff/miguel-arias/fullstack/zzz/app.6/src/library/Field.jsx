import Label from "./Label"
import Input from "./Input"

function Field(props) {
    return <>
        <Label forId={props.id}>{props.children}</Label>
        <Input id={props.id} type={props.type || "text"} placeholder={props.placeholder || ""} />
    </>
}

export default Field