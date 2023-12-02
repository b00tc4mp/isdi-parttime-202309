import Label from "./Label"
import Input from "./Input"

function Field(props) {
    /* para poder volver dos eleementos los tenemos que envolver en un contenedor */
    return <>
        <Label forId={props.id}>{props.children}</Label>
        <Input id={props.id} type={props.type || "text"} />
    </>
}

export default Field 