import { Pointer, CommandBar } from '../utils'

function Desktop() {
    const { pointer } = Pointer()

    return <>
        <div className="container">
            <p>~$</p>
            <p>Hi! Wellcome to your C:\Desktop</p>

            <br></br>

            <div className="command-bar">
                <CommandBar />

                <div id="command-form">
                    <input id="command" type="text" contentEditable="true" autoFocus autoComplete="off" />
                </div>

                <p>{pointer}</p>
            </div>
        </div>
    </>
}

export default Desktop