import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Documentation from "./Components/Documentation"
import Download from "./Components/Download"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/download" element={<Download />} />
                    <Route path="/documentation" element={<Documentation />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
