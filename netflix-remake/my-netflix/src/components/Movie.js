import "./Movie.css"
import movieInformations from "../data"
import MovieDeleteButton from "./MovieDeleteButton"
import AllMoviesDeleteButton from "./AllMoviesDeleteButton"
import ResetButton from "./ResetButton";
import { useState } from "react"

const Movie = () => {
    const[movieList, setMovieList] = useState(movieInformations)

    const deleteOneMovie = (idecko) => {
        const filteredMovies = movieList.filter( (oneMovie) => {
            return oneMovie.id !== idecko;
        })
        setMovieList(filteredMovies)
    }

    const deleteAllMovies = () => {
        setMovieList([])
    }

    const  resetMovieList = () =>{
        setMovieList(movieInformations);
    }


    return (
        <section>
            <div className ="all-movies">
                {
                    movieList.map( (oneMovie) => {
                        const {id, image, title, age, tags, description} = oneMovie

                        return <div className ="one-movie" key={id} >
                            <img src={image} alt="movie-poster"/>
                            <h2>{title}</h2>
                            <p>{age}</p>
                            <p>{tags}</p>
                            <p>{description}</p>
                            <MovieDeleteButton deleteMovie={() => deleteOneMovie(id)}/>
                        </div>
                })
            }
            </div>
            <div className="button-box">
                <AllMoviesDeleteButton deleteAllMovies={deleteAllMovies}/>
                <ResetButton resetMovieList={resetMovieList}/>
            </div>
        </section>
    )
}

export  default Movie