import Label from "./Label"
import Input from "./Input"

function Field({ id, children, type, value }) {
    /* para poder volver dos eleementos los tenemos que envolver en un contenedor */
    return <>
        <Label forId={id}>{children}</Label>
        <Input id={id} type={type || "text"} value={value} />
    </>
}

export default Field 