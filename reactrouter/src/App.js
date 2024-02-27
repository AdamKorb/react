import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./features/home/Home";
import Movies from "./features/movies/Movies";
import Serials from "./features/serials/Serials";
import Error from "./features/_shared/Error"
import SharedLayout from "./features/_layout/SharedLayout"
import OneMovie from "./features/_shared/OneMovie"

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
