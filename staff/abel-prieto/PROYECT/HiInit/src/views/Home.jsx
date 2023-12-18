import { useState, useEffect } from "react"

function Home() {

    const [pointer, setPointer] = useState('█')

    useEffect(() => {
        const setTimeStamp = setInterval(() => {
            setPointer(prevPointer => (prevPointer === '█' ? '' : '█'));
        }, 1000);

        return () => clearInterval(setTimeStamp);
    }, []);

    return <>

        <div className="home">

            <div>
                <div className="tittle-logo">
                    <p>    ___ ___  .___ .___  _______   .___ ___________     __      __        ___        </p>
                    <p>   /   |   \ |   ||   | \      \  |   |\__    ___/    /  \    /  \  ____ \_ |__     </p>
                    <p>  /    ~    \|   ||   | /   |   \ |   |  |    |       \   \/\/   /_/ __ \ | __ \    </p>
                    <p>  \    Y    /|   ||   |/    |    \|   |  |    |        \        / \  ___/ | \_\ \   </p>
                    <p>   \___|_  / |___||___|\____|__  /|___|  |____|         \__/\  /   \___   |___  /   </p>
                    <p>         \/                    \/                            \/        \/     \/    </p>
                </div>

                <div className="home-text">
                    <p>Type 'help' to see the list of avaliable comands.</p>
                    <p>Please, press 'ENTRY' to log in or sign up</p>
                </div>

                <br></br>
                <br></br>

                <div className="info">
                    <p>INFORMATION</p>
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

                <div className="field-order">
                    <span><p>guest</p></span>
                    <span><p>@</p></span>
                    <span><p>local-user</p></span>
                    <span><p>:$ </p></span>
                    {/* <input type="text" autofocus autocomplete="off" value></input> */}
                    <p>{pointer}</p>
                </div>


                <br></br>
                <br></br>

                <footer className="sign">
                    <p style={{ fontSize: 'solid', fontStyle: 'italic' }}>© Copyright by Abel Prieto | Proyect ISDI Coders School</p>
                </footer>

            </div>
        </div >
    </>
}


export default Home