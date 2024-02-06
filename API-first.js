import { useState, useEffect } from "react"

const App = () => {

  const [quote, setQuote] = useState()

  const  url = "https://api.kanye.rest/"

  const getQuote = async () => {
    const response = await fetch(url)
    const data = await response.json()
    const finalQuote = data["quote"]
    setQuote(finalQuote)
  }

  useEffect( () => {
    getQuote()
  },[])

  return (
    <div>
      <h2>Kanye West citát na dnes je:</h2>
      <p>{quote}</p>
      <button onClick={getQuote}>refresh</button>
    </div>
  )
}
export default App;