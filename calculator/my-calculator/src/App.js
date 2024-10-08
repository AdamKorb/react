import DecreaseButton from "./components/DecreaseButton"
import IncreaseButton from "./components/IncreaseButton"
import ResetButton from "./components/ResetButton"
import { useState } from "react"

const App = () => {
  const [value, setValue] = useState(0)
  
  const decreaseOne = () => {
    const newValue = value - 1
    setValue(newValue)
  }

  const increaseOne = () => {
    const newValue = value + 1
    setValue(newValue)
  }

  const reset = () => {
    setValue (0)
    
  }

  return (
    <div  className="counter">
      <h1>Počítadlo</h1>
      <h2>{value}</h2>
      <DecreaseButton decreaseOne={decreaseOne}/>
      <IncreaseButton increaseOne={increaseOne}/>
      <ResetButton reset={reset}/>
    </div>
  )
}

export default App