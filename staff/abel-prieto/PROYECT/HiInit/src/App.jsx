import Loading from "./views/Loading"
import { useState } from "react"

function App() {

  const [view, setView] = useState(null)

  return <>
    <Loading />
  </>

}

export default App
