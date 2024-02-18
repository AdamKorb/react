import PropTypes  from 'prop-types';
import defaultImage from "../images/book-default.jpg";

const Book = ({ image, title, price }) => {
  return (
    <div>
      <h2>{title || "defaultný názov"}</h2>
      <img src={image || defaultImage} alt="" />
      <p>{price || 0} Kč</p>
    </div>
  )
}

Book.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}
/* druhý spôsob zápisu
Book.defaultProps = {
    image: defaultImage,
    title:"Defaultný názov",
    price: 0,
}*/

export default Book
