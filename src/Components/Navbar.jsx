import {
    faAngleDoubleRight,
    faBook,
    faCircleArrowDown,
    faHome,
    faMoon,
    faSun,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom"
import "../Styles/Navbar.css"

function Navbar() {
    const [theme, setTheme] = useState("dark")
    return (
        <nav class="navbar">
            <ul class="navbar-nav">
                <li class="logo">
                    <Link to="/" class="nav-link">
                        <span class="link-text logo-text">Celeratas</span>
                        <FontAwesomeIcon
                            icon={faAngleDoubleRight}
                            size="2x    "
                            color="hotpink"
                        ></FontAwesomeIcon>
                    </Link>
                </li>

                <li class="nav-item">
                    <Link to="/" class="nav-link">
                        <FontAwesomeIcon
                            icon={faHome}
                            size="2x"
                            color="hotpink"
                        ></FontAwesomeIcon>
                        <span class="link-text">Home</span>
                    </Link>
                </li>

                <li class="nav-item">
                    <Link to="/download" class="nav-link">
                        <FontAwesomeIcon
                            icon={faCircleArrowDown}
                            size="2x"
                            color="hotpink"
                        ></FontAwesomeIcon>
                        <span class="link-text">Download</span>
                    </Link>
                </li>

                <li class="nav-item">
                    <Link to="/documentation" class="nav-link">
                        <FontAwesomeIcon
                            icon={faBook}
                            size="2x"
                            color="hotpink "
                        ></FontAwesomeIcon>
                        <span class="link-text">Documentation</span>
                    </Link>
                </li>

                <li class="nav-item">
                    <button
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                        class="nav-link nav-button"
                    >
                        <FontAwesomeIcon
                            icon={theme === "light" ? faSun : faMoon}
                            size="2x"
                            color="hotpink "
                        ></FontAwesomeIcon>
                        <span class="link-text">Theme</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
