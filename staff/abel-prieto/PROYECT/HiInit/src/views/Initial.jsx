import Credentials from './Credentials'
import { useState, useEffect } from 'react'

function Initial() {

    // POINTER AND COMMAND STATE
    const [pointer, setPointer] = useState('█')
    const [commandValue, setCommandValue] = useState(null)

    // VIEWS
    const [view, setView] = useState(null)

    // POINTER EFFECT
    useEffect(() => {
        const setTimeStamp = setInterval(() => {
            setPointer(prevPointer => (prevPointer === '█' ? '' : '█'))
        }, 1000)

        return () => clearInterval(setTimeStamp)
    }, [])

    // ESCUCHA TECLADO Y ESCRITURA 
    function commandField(event) {
        event.preventDefault()

        const commandText = document.getElementById('command')

        commandText.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                setView('credentials')
            } else {
                commandText = event.target.value
                setCommandValue(commandText)
            }
        })
    }

    return <>

        <div className="container">

            <div className="tittle-logo">
                <p>    ___ ___  .___ .___  _______   .___ ___________     __      __        ___              _______      _______       </p>
                <p>   /   |   \ |   ||   | \      \  |   |\__    ___/    /  \    /  \  ____ \_ |__     ___  _\   _  \     \   _  \      </p>
                <p>  /    ~    \|   ||   | /   |   \ |   |  |    |       \   \/\/   /_/ __ \ | __ \    \  \/ /  /_\  \    /  /_\  \     </p>
                <p>  \    Y    /|   ||   |/    |    \|   |  |    |        \        / \  ___/ | \_\ \    \   /\  \_/   \   \  \_/   \    </p>
                <p>   \___|_  / |___||___|\____|__  /|___|  |____|         \__/\  /   \___   |___  /     \_/  \_____  / /\ \_____  /    </p>
                <p>         \/                    \/                            \/        \/     \/                 \/  \/       \/     </p>
            </div>

            <div className="text">
                <p>Type 'help' to see the list of avaliable comands.</p>
                <p>Please, press 'ENTRY' to log in or sign up</p>
            </div>

            <br></br>
            <br></br>

            <div className="info">
                <p>INFORMATION</p>
                <br></br>
                <p>-----------------------------------------</p>
                <div className="info-about">
                    <p>ABOUT</p>
                    <br></br>
                    <p>👤 Abel Prieto Martín</p>
                    <p>-----------------------------------------</p>
                </div>
                <div className="info-contact">
                    <p>CONTACT</p>
                    <br></br>
                    <p>📧 abelpriem94@hotmail.com</p>
                    <a href="https://github.com/AbelPucela94" target="_blank">🌐 github.com/AbelPucela94</a>
                    <a href="https://www.linkedin.com/in/abel-prieto-mart%C3%ADn-050b75b8/" target="_blank">🌐 linkedin.com/abel-prieto-martin</a>
                    <p>-----------------------------------------</p>
                </div>
            </div>

            <br></br>
            <br></br>

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

            <br></br>
            <br></br>

            {view === 'credentials' && <Credentials pointer={pointer} commandField={() => commandField} />}

            <footer className="sign">
                <p style={{ fontSize: 'solid', fontStyle: 'italic' }}>© Copyright by Abel Prieto | Proyect ISDI Coders School</p>
            </footer>

        </div >
    </>
}

export default Initial