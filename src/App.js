import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Register from './components/register'
import Calculation from './components/calculator';
import Output from './components/output';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/calculation" element={<Calculation/>} />
          <Route path="/output" element={<Output/>} />
        </Routes>
      </div>
    </Router>
  );
  
}

export default App;
