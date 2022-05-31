import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/NavFolder/Navbar';
import Index from './components/IndexFolder/Index';
import Login from './components/LoginFolder/Login';
import About from './components/AboutFolder/About';
import Signup from './components/SignupFolder/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='page-container'>
          <Routes>
              <Route exact path="/" element={<Index/>} />
              <Route exact path="/login" element={<Login/>} />
              <Route exact path="/about" element={<About/>} />
              <Route exact path="/signup" element={<Signup/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
