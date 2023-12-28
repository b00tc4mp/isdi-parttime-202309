import Label from "./Label";
import Input from "./Input";

function Field({id, type, children, value}) {
    return <>
        <Label forId={id}>{children}</Label>
        <Input id={id} type={type || "text"} value={value} />
    </>

}

export default Field