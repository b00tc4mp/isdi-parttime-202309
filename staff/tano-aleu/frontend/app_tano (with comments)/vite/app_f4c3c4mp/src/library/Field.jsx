import Label from "./Label";
import Input from "./Input";

//  <> Fragmento </>

function Field({ id, children, type, placeholder, value}) {

    return <>

        <Label forId={id}>{children}</Label>

        <Input id={id} type={type || "text"} placeholder={placeholder} value={value}/>
        
    </>
}

export default Field