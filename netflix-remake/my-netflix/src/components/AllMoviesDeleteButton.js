import "./AllMoviesDeleteButton.css"

const AllMovieDeleteButton = (props) => {
    return (
        <div>
            <button className="main-delete-button" onClick={props.deleteAllMovies}>Vymazať všetky filmy</button>
        </div>
    )
}
export default AllMovieDeleteButton;