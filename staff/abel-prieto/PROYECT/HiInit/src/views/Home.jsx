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

        <div className="command-input">
            <div className="field-order">
                <span><p>guest</p></span>
                <span><p>@</p></span>
                <span><p>local-user</p></span>
                <span><p>:$ </p></span>
                <input className="command-input" type="text" />
                <p>{pointer}</p>
            </div>
        </div >
    </>
}


export default Home