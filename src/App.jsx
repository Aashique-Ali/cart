import { useState } from "react"
import Cards from "./components/Cards"
import Menu from "./components/Menu"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu />
      <Cards />
    </>
  )
}

export default App
