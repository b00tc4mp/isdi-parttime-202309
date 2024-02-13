
function Credentials({ pointer, commandValue, commandField }) {
    return <>
        <div className="container">

            <p>Entry login or register command to switch between the different login and register components</p>

            <div className="command-bar">
                <span><p className="user-guest">guest</p></span>
                <span><p>@</p></span>
                <span><p>local</p></span>
                <span><p>-</p></span>
                <span><p>guest</p></span>
                <span><p>:</p></span>
                <div id="command-form">
                    <input id="command" type="text" contenteditable="true" autoFocus autoComplete="off" value={commandValue} onChange={commandField} />
                </div>
                <p>{pointer}</p>
            </div>

        </div>
    </>
}

export default Credentials