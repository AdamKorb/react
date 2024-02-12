import { useRef } from 'react';

const App = () => {

  const refInput = useRef(null)
  const refHeading = useRef(null)
  const refLink = useRef(null)

  const formSubmit = (event) => {
    event.preventDefault()

    console.log(refHeading.current.textContent="Nový text")
    console.log(refLink.current.textContent)
  }

  return (
    <div>
      <h1 ref={refHeading}>Formulár</h1>
      <form onSubmit={formSubmit}>
        <input type="text" ref={refInput} /><br />
        <input type="submit" />
      </form>
      <a ref={refLink} href="https://www.google.com">GOOGLE</a>
    </div>
  )
}

export default App

