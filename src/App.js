import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
import Guide from "./pages/Guide";
import Home from "./pages/Home"
import logo from "./vofi_logo.png";


function App() {
  return (
    <Router>
        <nav>
            <div>
                <img className={"logo"} src={logo} alt={"icon"} />
            </div>
            <Link to={"/pythonProject"}>Home</Link>
            <Link to={"/guide"}>Příručka</Link>
        </nav>

      <Routes>
        <Route path="/guide" element={<Guide />} />
        <Route path="/pythonProject" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
