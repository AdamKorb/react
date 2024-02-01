import "./ResetButton.css"

const ResetButton = (props) => {
    return (
        <button className="reset-button" onClick={props.resetMovieList} >Refresh zoznamu</button>
    )
}

export  default ResetButton;