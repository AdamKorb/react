import allMovies from "./data/data"
import { useState, useEffect } from "react"

const App = () => {

  const [searchText, setSearchText] = useState("")
  const [filteredMovies, setFilteredMovies] = useState([])

  useEffect ( () => {
    let moviesAfterFilter = allMovies.filter( (oneMovie) => {
      return oneMovie.title.toLowerCase().includes(searchText.toLowerCase())
    })
    setFilteredMovies(moviesAfterFilter)

  }, [searchText])

  return (
    <div className="movies-box">
      <form>
        <input 
          type="text"
          id="searchInput"
          placeholder="Názov filmu"
          onChange={ (event) => setSearchText(event.target.value) 
        }/>
      </form>
      <div className="all-movies">
        {filteredMovies.map( (oneMovie) => {
          const {id, image, title, age, tags, description} = oneMovie

          return <div key={id} className="one-movie">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{age}</p>
            <p>{tags}</p>
            <p>{description}</p>
          </div>
        })}
      </div>

    </div>
  )
}

export default App
