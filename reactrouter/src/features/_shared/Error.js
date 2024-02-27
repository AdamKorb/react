import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div>
      <h2>404 Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p><Link to ="/">Back to page</Link></p>
    </div>
  )
}

export default Error
