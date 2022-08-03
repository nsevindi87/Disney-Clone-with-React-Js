import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Login from "./Componenets/Login.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}>
            
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
