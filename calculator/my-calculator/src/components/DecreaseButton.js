import "./DecreaseButton.css"

const DecreaseButton = (props) => {
    return (
        <button className="btn" onClick={props.decreaseOne} >Odčítaj 1</button>
    )
}

export default  DecreaseButton;