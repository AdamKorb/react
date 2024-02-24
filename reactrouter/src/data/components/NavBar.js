import { NavLink } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
  return (
    <header>
        <nav>
            <NavLink to="/" className={ ({isActive}) =>
                isActive ? "activeLink link" : "noneActiveLink link" }>Domov</NavLink><br />
            <NavLink to="/movies" className={ ({isActive}) =>
                isActive ? "activeLink link" : "noneActiveLink link" }>Filmy</NavLink><br />
            <NavLink to="/serials" className={ ({isActive}) =>
                isActive ? "activeLink link" : "noneActiveLink link" }>Seriály</NavLink><br />
        </nav>
    </header>
  )
}

export default NavBar
