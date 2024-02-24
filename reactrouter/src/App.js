import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./data/pages/Home"
import Movies from "./data/pages/Movies"
import Serials from "./data/pages/Serials"
import Error from "./data/pages/Error"
import SharedLayout from "./data/pages/SharedLayout"
import OneMovie from "./data/components/OneMovie"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={ <SharedLayout /> }>
          <Route index element={<Home />} />
          <Route path="/movies" element={ <Movies /> } />
          <Route path="/serials" element={ <Serials /> } />
          <Route path="/all-movies/:movieId" element={ <OneMovie /> } />
          <Route path="*" element={ <Error /> } />
        </Route>

      </Routes>
    </BrowserRouter>
  )

  
}

export default App
