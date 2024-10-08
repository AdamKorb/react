import { useParams } from "react-router-dom" 
import { Link } from "react-router-dom"
import movies from "../_shared/data"
import "./OneMovie.css"

const OneMovie = () => {

    const {movieId} = useParams()

    const oneSpecificMovie = movies.find( (oneMovie) => {
        return oneMovie.id === parseInt(movieId)
    })

    const {image, title, description, tags} = oneSpecificMovie

  return (
   <section className="one-movie-more">
    <h2>{title}</h2>
    <img src={image} alt="" />
    <p>{description}</p>
    <p>{tags}</p>
    <Link to="/movies">Späť na Filmy</Link>
   </section>
  )
}

export default OneMovie
