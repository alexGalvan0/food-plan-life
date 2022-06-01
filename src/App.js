import './App.css';
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavFolder/Navbar';
import Index from './components/IndexFolder/Index';
import Login from './components/LoginFolder/Login';
import About from './components/AboutFolder/About';
import Signup from './components/SignupFolder/Signup';
import Profile from './components/ProfileFolder/Profile';

export const userContext = createContext(null);

function App() {
  const [userToken, setUserToken] = useState('')
  return (
      <Router>
        <div className="App">
          <Navbar />
          <div className='page-container'>
          <userContext.Provider value={{userToken, setUserToken}}>
            <Routes>
                <Route exact path="/" element={<Index/>} />
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/signup" element={<Signup/>} />
                <Route exact path="/profile" element={<Profile/>} />
            </Routes>
          </userContext.Provider>
          </div>
        </div>
      </Router>
  );
}

export default App;
