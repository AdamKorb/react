//Priklad pre useEffect

import { useState, useEffect } from "react"

const App = () => {

  const [value, setValue] = useState(0)
  const [test, setTest] = useState (0)

  useEffect(  () =>{
    const button = document.querySelector(".btn")
    if (value >= 1) {
      button.textContent = `Klik číslo ${value}`
    } else {
      button.textContent = `Klikni`
    }
  },[value])

  useEffect( () => {
    document.title = `Nový titulok ${test}`
  },[test])

  return (
    <div>
      <h1>ahoj</h1>
      <p>{value}</p>
      {console.log("Ja som return")}
      <button className="btn" onClick={() => setValue(value + 1)}>klikni</button>
      <button onClick={ () => setTest(test + 1) } >Titulok</button>
    </div>
  )
}

export default App;