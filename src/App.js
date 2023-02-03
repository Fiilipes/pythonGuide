import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
import Guide from "./pages/Guide";
import Home from "./pages/Home"
import Dictionary from "./pages/Dictionary";
import logo from "./filipesLogo.png";


function App() {

  return (
    <Router>
        <nav>
            <div>
                <img className={"logo"} src={logo} alt={"icon"} />
            </div>
            <Link to={"/"}>Home</Link>
            <Link to={"/guide"}>Příručka</Link>
            <Link to={"/dictionary"}>Slovník</Link>
        </nav>

      <Routes>
        <Route path="/guide" element={<Guide />} />
        <Route path="/" element={<Home />} />
        <Route path="/dictionary" element={<Dictionary />} />
      </Routes>

    </Router>
  );
}

export default App;
