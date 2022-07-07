import {
    faBook,
    faCircleArrowDown,
    faHouse,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../Styles/Navbar.css"

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <FontAwesomeIcon icon={faHouse} className="icon" />
                    <span className="link-text"></span>
                </li>
                <li className="nav-item">
                    <FontAwesomeIcon
                        icon={faCircleArrowDown}
                        className="icon"
                    />
                    <span className="link-text"></span>
                </li>
                <li className="nav-item">
                    <FontAwesomeIcon icon={faBook} size="4x" className="icon" />
                    <span className="link-text"></span>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
