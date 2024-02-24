import { Link } from "react-router-dom" 
import movies from "../data"
import "./Movies.css"


function Movies () {
  return (
    <section>
        <div className="all-movies">
            {movies.map( (OneMovie) => {
                return <article key={OneMovie.id} className="one-movie">
                    <h2>{OneMovie.title}</h2>
                    <img src={OneMovie.image} alt="Obrázok filmu"/><br />
                    <Link to={`/all-movies/${OneMovie.id}`}>Viac informácii</Link>
                </article>
            })}
        </div>
    </section>
  )
}

export default Movies
