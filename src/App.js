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
            <Link to={"/pythonGuide"}>Home</Link>
            <Link to={"/pythonGuide/guide"}>Příručka</Link>
            <Link to={"/pythonGuide/dictionary"}>Slovník</Link>
        </nav>

      <Routes>
        <Route path="/pythonGuide/guide" element={<Guide />} />
        <Route path="/pythonGuide" element={<Home />} />
        <Route path="/pythonGuide/dictionary" element={<Dictionary />} />
      </Routes>

    </Router>
  );
}

export default App;
