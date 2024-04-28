import Label from "./Label";
import Input from "./Input";

function Field(props) {
    return <>
        <Label forId={props.id}>{props.children}</Label>
        {/* Ponemos el default "text" así si no indicamos otro type, como password or email, automáticamente sería un text*/ }
        <Input id={props.id} type={props.type || "text"}/>
    </>
}

export default Field