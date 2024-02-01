import "./IncreaseButton.css"

const  IncreaseButton = (props) => {
    return(
        <button className="btn" onClick={props.increaseOne}>Pripočítaj 1</button>
    )
}
export default IncreaseButton;