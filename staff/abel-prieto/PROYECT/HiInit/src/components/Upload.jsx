import { useState } from 'react'
import { CommandBar, Pointer } from '../utils'

function Upload() {
    const [commandText, setCommandText] = useState('')
    const [upload, setUpload] = useState(true)
    const { pointer } = Pointer()

    return <>
        <div className="container">
            <p>~$</p>
            <p>Select the files and upload them: </p>

            <br />

            <div className="command-bar">
                <CommandBar />

                <div id="command-form">
                    <input id="command" type="text" contentEditable="true" autoFocus autoComplete="off" value={commandText} onChange={(event) => setCommandText(event.target.value)}
                        style={{ width: `${Math.max(10, commandText.length * 8)}px` }} />
                </div>

                {uknownCommand && (
                    <span>
                        <p>shell: command not found: '{commandText}'. Entry login or register</p>
                    </span>
                )}

                <p>{pointer}</p>
            </div>
        </div>
    </>
}

export default Upload