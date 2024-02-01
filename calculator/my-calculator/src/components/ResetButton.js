import "./ResetButton.css"

const  ResetButton = (props) => {
    return(
        <button className="btn" onClick={props.reset}>Resetuj</button>
    )
}
export default ResetButton;