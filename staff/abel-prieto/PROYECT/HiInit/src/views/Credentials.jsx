import CommandBar from '../components/CommandBar'

function Credentials({ pointer, commandValue, commandField }) {
    return <>
        <div className="container">
            <p>~$</p>
            <p>Entry login or register command to switch between the different login and register components</p>

            <br></br>

            <div className="command-bar">
                <CommandBar />
                <div id="command-form">
                    <input id="command" type="text" contenteditable="true" autoFocus autoComplete="off" value={commandValue} onChange={commandField} />
                </div>
                <p>{pointer}</p>
            </div>

        </div>
    </>
}

export default Credentials